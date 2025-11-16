import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { TrendingUp } from "lucide-react";

const modelData = [
  { name: "Logistic Regression", accuracy: 61.05, color: "hsl(195, 85%, 45%)" },
  { name: "KNN", accuracy: 60.31, color: "hsl(190, 75%, 55%)" },
  { name: "SVC", accuracy: 67.76, color: "hsl(180, 95%, 60%)" },
  { name: "Naive Bayes", accuracy: 61.96, color: "hsl(195, 85%, 55%)" },
  { name: "Decision Tree", accuracy: 56.53, color: "hsl(190, 75%, 45%)" },
  { name: "Random Forest", accuracy: 64.46, color: "hsl(180, 95%, 50%)" },
];

const ResultsDashboard = () => {
  const bestModel = modelData.reduce((prev, current) => 
    (prev.accuracy > current.accuracy) ? prev : current
  );

  return (
    <section id="dashboard" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Model Performance Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comparative analysis of machine learning models
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card border-0 bg-card">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Best Model</p>
                <p className="text-2xl font-bold text-primary">{bestModel.name}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card border-0 bg-card">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Highest Accuracy</p>
                <p className="text-2xl font-bold text-primary">{bestModel.accuracy}%</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card border-0 bg-card">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Models Tested</p>
                <p className="text-2xl font-bold text-primary">{modelData.length}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card-hover border-0 bg-card">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl">Model Accuracy Comparison</CardTitle>
            </div>
            <CardDescription>
              Performance metrics across different machine learning algorithms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={modelData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis 
                    dataKey="name" 
                    angle={-45} 
                    textAnchor="end" 
                    height={100}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  />
                  <YAxis 
                    domain={[0, 100]} 
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                    label={{ value: 'Accuracy (%)', angle: -90, position: 'insideLeft', fill: "hsl(var(--muted-foreground))" }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                    formatter={(value: number) => [`${value.toFixed(2)}%`, "Accuracy"]}
                  />
                  <Bar 
                    dataKey="accuracy" 
                    radius={[8, 8, 0, 0]}
                    animationDuration={1500}
                    animationBegin={0}
                  >
                    {modelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              {modelData.map((model, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: model.color }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {model.name}: {model.accuracy}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResultsDashboard;
