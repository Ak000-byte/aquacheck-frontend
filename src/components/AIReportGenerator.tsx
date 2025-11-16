import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, FileText } from "lucide-react";
import { useState } from "react";

const AIReportGenerator = () => {
  const [report, setReport] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateReport = () => {
    setIsGenerating(true);
    
    // Simulate AI report generation
    setTimeout(() => {
      const sampleReport = `
**Water Quality Analysis Report**

**Executive Summary:**
Based on the comprehensive analysis of the provided water parameters, the water sample has been classified as non-potable and requires immediate attention before consumption.

**Key Findings:**

1. **pH Level Assessment:**
   - Current pH: Outside optimal range
   - Safe Range: 6.5 - 8.5
   - Impact: May indicate chemical contamination

2. **Turbidity Analysis:**
   - Current Level: Elevated
   - Safe Threshold: < 5 NTU
   - Concern: High turbidity detected, indicating suspended particles

3. **Chemical Composition:**
   - Chloramines: Within acceptable limits
   - Sulfate: Normal levels detected
   - Total Dissolved Solids: Requires monitoring

**Recommendations:**

1. **Immediate Actions:**
   - Do not use water for drinking or cooking
   - Install appropriate filtration system
   - Conduct detailed laboratory analysis

2. **Treatment Suggestions:**
   - Reverse osmosis filtration recommended
   - pH adjustment may be necessary
   - Regular monitoring schedule advised

3. **Safety Measures:**
   - Use alternative water source for consumption
   - Avoid direct contact until treatment complete
   - Consult water treatment specialists

**Predicted Model:** Support Vector Classifier (67.76% accuracy)

**Analysis Date:** ${new Date().toLocaleDateString()}

**Disclaimer:** This is an AI-generated preliminary analysis. For critical decisions, please consult certified water quality professionals and conduct laboratory testing.
      `;
      
      setReport(sampleReport);
      setIsGenerating(false);
    }, 2000);
  };

// const generateReport = async () => {
//   setIsGenerating(true);

//   const response = await fetch("http://localhost:5000/generate-report", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(formValues)  // form input yaha jayega
//   });

//   const result = await response.json();

//   setReport(result.report);
//   setIsGenerating(false);
// };

  return (
    <section id="ai-report" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Coming Soon
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            AI-Powered Report Generator
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get detailed insights and recommendations powered by artificial intelligence
          </p>
        </div>

        <Card className="shadow-card-hover border-0 bg-card">
          <CardHeader className="text-center">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Generate Comprehensive Report</CardTitle>
            <CardDescription className="text-base">
              AI-generated analysis with actionable recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={generateReport}
                disabled={isGenerating}
                className="bg-primary hover:bg-primary-dark text-primary-foreground text-lg px-12 py-6 rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                {isGenerating ? "Generating Report..." : "Generate AI Report"}
              </Button>
            </div>

            {report && (
              <div className="mt-8 p-8 rounded-xl bg-muted/50 border border-border animate-fade-up">
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <div className="whitespace-pre-line text-sm leading-relaxed text-foreground">
                    {report}
                  </div>
                </div>
                
                <div className="mt-6 flex gap-4 justify-center">
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Download PDF
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Share Report
                  </Button>
                </div>
              </div>
            )}

            {!report && (
              <div className="mt-8 p-8 rounded-xl bg-muted/30 border-2 border-dashed border-border">
                <div className="text-center text-muted-foreground">
                  <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">
                    Click the button above to generate a detailed AI-powered water quality report
                  </p>
                  <p className="text-xs mt-2">
                    Reports include analysis, recommendations, and safety measures
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="shadow-card border-0 bg-card hover:shadow-card-hover transition-all duration-300">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Smart Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered insights based on latest research
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-card hover:shadow-card-hover transition-all duration-300">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Detailed Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive breakdown of all parameters
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-card hover:shadow-card-hover transition-all duration-300">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Actionable Steps</h3>
                <p className="text-sm text-muted-foreground">
                  Clear recommendations for water treatment
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const TrendingUp = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export default AIReportGenerator;
