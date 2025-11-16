import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Droplet, AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const waterQualitySchema = z.object({
  ph: z.number().min(0).max(14),
  hardness: z.number().min(0).max(500),
  solids: z.number().min(0).max(50000),
  chloramines: z.number().min(0).max(20),
  sulfate: z.number().min(0).max(500),
  conductivity: z.number().min(0).max(1000),
  organicCarbon: z.number().min(0).max(30),
  trihalomethanes: z.number().min(0).max(150),
  turbidity: z.number().min(0).max(10),
});

const PredictionForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    ph: "",
    hardness: "",
    solids: "",
    chloramines: "",
    sulfate: "",
    conductivity: "",
    organicCarbon: "",
    trihalomethanes: "",
    turbidity: "",
  });
  const [prediction, setPrediction] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // const handlePredict = () => {
  //   try {
  //     // Convert string values to numbers
  //     const numericData = {
  //       ph: parseFloat(formData.ph),
  //       hardness: parseFloat(formData.hardness),
  //       solids: parseFloat(formData.solids),
  //       chloramines: parseFloat(formData.chloramines),
  //       sulfate: parseFloat(formData.sulfate),
  //       conductivity: parseFloat(formData.conductivity),
  //       organicCarbon: parseFloat(formData.organicCarbon),
  //       trihalomethanes: parseFloat(formData.trihalomethanes),
  //       turbidity: parseFloat(formData.turbidity),
  //     };

  //     // Validate input
  //     waterQualitySchema.parse(numericData);

  //     setIsLoading(true);
      
  //     // Simulate prediction (in real app, this would call an API)
  //     setTimeout(() => {
  //       // Simple rule-based prediction for demo
  //       const isPotable = 
  //         numericData.ph >= 6.5 && numericData.ph <= 8.5 &&
  //         numericData.turbidity < 5 &&
  //         numericData.chloramines < 4;
        
  //       setPrediction(isPotable);
  //       setIsLoading(false);
        
  //       toast({
  //         title: "Analysis Complete",
  //         description: "Water quality prediction has been generated.",
  //       });
  //     }, 1500);

  //   } catch (error) {
  //     if (error instanceof z.ZodError) {
  //       toast({
  //         title: "Invalid Input",
  //         description: "Please check all fields and ensure values are within valid ranges.",
  //         variant: "destructive",
  //       });
  //     }
  //   }
  // };


  const handlePredict = async () => {
    try {
      // Convert string values to numbers
      const numericData = {
        ph: parseFloat(formData.ph),
        hardness: parseFloat(formData.hardness),
        solids: parseFloat(formData.solids),
        chloramines: parseFloat(formData.chloramines),
        sulfate: parseFloat(formData.sulfate),
        conductivity: parseFloat(formData.conductivity),
        organicCarbon: parseFloat(formData.organicCarbon),
        trihalomethanes: parseFloat(formData.trihalomethanes),
        turbidity: parseFloat(formData.turbidity),
      };
  
      // Validate input using zod schema (will throw if invalid)
      waterQualitySchema.parse(numericData);
  
      setIsLoading(true);
  
      // --- Map frontend keys to backend expected keys ---
      // server.js expects: ph, Hardness, Solids, Chloramines, Sulfate,
      // Conductivity, Organic_carbon, Trihalomethanes, Turbidity
      const payload = {
        ph: numericData.ph,
        Hardness: numericData.hardness,
        Solids: numericData.solids,
        Chloramines: numericData.chloramines,
        Sulfate: numericData.sulfate,
        Conductivity: numericData.conductivity,
        Organic_carbon: numericData.organicCarbon,
        Trihalomethanes: numericData.trihalomethanes,
        Turbidity: numericData.turbidity,
      };
  
      // --- Call your backend ---
      // Dev: http://localhost:5000 (server.js in earlier messages listens on 5000)
      const res = await fetch("http://localhost:5000/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Server error: ${res.status} ${text}`);
      }
  
      const data = await res.json();
  
      // server returns { potability: 0|1, message: "..."}
      const potability = data?.potability;
      const isPotable = potability === 1 || potability === "1";
  
      setPrediction(Boolean(isPotable));
      setIsLoading(false);
  
      toast({
        title: "Analysis Complete",
        description: data?.message ?? "Water quality prediction has been generated.",
      });
    } catch (error: any) {
      setIsLoading(false);
  
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid Input",
          description: "Please check all fields and ensure values are within valid ranges.",
          variant: "destructive",
        });
        return;
      }
  
      console.error("Prediction error:", error);
      toast({
        title: "Prediction Failed",
        description: error?.message ?? "Something went wrong while calling the server.",
        variant: "destructive",
      });
    }
  };
  
  const inputFields = [
    { id: "ph", label: "pH Level", placeholder: "6.5 - 8.5", unit: "" },
    { id: "hardness", label: "Hardness", placeholder: "0 - 500", unit: "mg/L" },
    { id: "solids", label: "Total Dissolved Solids", placeholder: "0 - 50000", unit: "ppm" },
    { id: "chloramines", label: "Chloramines", placeholder: "0 - 15", unit: "ppm" },
    { id: "sulfate", label: "Sulfate", placeholder: "0 - 500", unit: "mg/L" },
    { id: "conductivity", label: "Conductivity", placeholder: "0 - 1000", unit: "μS/cm" },
    { id: "organicCarbon", label: "Organic Carbon", placeholder: "0 - 30", unit: "ppm" },
    { id: "trihalomethanes", label: "Trihalomethanes", placeholder: "0 - 150", unit: "μg/L" },
    { id: "turbidity", label: "Turbidity", placeholder: "0 - 10", unit: "NTU" },
  ];

  return (
    <section id="predict" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Water Quality Prediction
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enter water parameters for instant quality analysis
          </p>
        </div>

        <Card className="shadow-card-hover border-0 bg-card">
          <CardHeader className="text-center pb-6">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto">
              <Droplet className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">Enter Water Parameters</CardTitle>
            <CardDescription className="text-base">
              Fill in all fields for accurate prediction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {inputFields.map((field) => (
                <div key={field.id} className="space-y-2 group">
                  <Label htmlFor={field.id} className="text-sm font-medium flex items-center gap-2">
                    <Droplet className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {field.label}
                  </Label>
                  <div className="relative">
                    <Input
                      id={field.id}
                      type="number"
                      placeholder={field.placeholder}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="h-12 border-border focus:ring-primary pr-16"
                      step="0.01"
                    />
                    {field.unit && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                        {field.unit}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              onClick={handlePredict}
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-dark text-primary-foreground text-lg py-6 rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02]"
            >
              {isLoading ? "Analyzing..." : "Predict Water Quality"}
            </Button>

            {/* Results Display */}
            {prediction !== null && (
              <div className={`mt-8 p-6 rounded-xl border-2 animate-fade-up ${
                prediction 
                  ? "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800" 
                  : "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800"
              }`}>
                <div className="flex items-center justify-center gap-3 mb-2">
                  {prediction ? (
                    <>
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                      <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">
                        Water is Potable
                      </h3>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-8 h-8 text-red-600" />
                      <h3 className="text-2xl font-bold text-red-700 dark:text-red-400">
                        Water is Not Potable
                      </h3>
                    </>
                  )}
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  {prediction 
                    ? "The water meets safety standards and is suitable for consumption."
                    : "The water does not meet safety standards. Further treatment required."}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PredictionForm;
