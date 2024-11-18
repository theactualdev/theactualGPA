import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import Field from "./Field";

function App() {
  const [components, setComponents] = useState([{ id: 0, grade: "", units: "" }]);

  // Add a new course component
  const handleAddComponent = () => {
    setComponents([...components, { id: components.length, grade: "", units: "" }]);
  };

  // Clear all components
  const handleClearComponents = () => {
    setComponents([]);
  };

  // Calculate GPA
  const handleCalculateGPA = () => {
    const totalPoints = components.reduce((acc, comp) => {
      const grade = parseFloat(comp.grade) || 0;
      const units = parseFloat(comp.units) || 0;
      return acc + grade * units;
    }, 0);

    const totalUnits = components.reduce((acc, comp) => {
      const units = parseFloat(comp.units) || 0;
      return acc + units;
    }, 0);

    const gpa = totalUnits > 0 ? totalPoints / totalUnits : 0;
    alert(`Your GPA is ${gpa.toFixed(2)}`);
  };

  return (
    <div className="wrapper w-full flex flex-col gap-16 items-center justify-center h-screen">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Calculate your GPA!</CardTitle>
          <CardDescription>Stop counting your fingers, calculate your GPA real quick!</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="row flex justify-between">
            <p>Course Name</p>
            <p>Grade</p>
            <p>Credits</p>
          </div>
          <div className="fields flex flex-col gap-4">
            {components.map((comp) => (
              <Field
                key={comp.id}
                id={comp.id}
                data={comp}
                updateField={(updatedField) =>
                  setComponents(
                    components.map((compItem) =>
                      compItem.id === comp.id ? { ...compItem, ...updatedField } : compItem
                    )
                  )
                }
              />
            ))}
          </div>
          <div className="inc flex justify-center gap-6">
            <p
              className="text-green-500 border-green-500 border p-2 rounded-lg hover:cursor-pointer hover:bg-green-500 hover:text-white"
              onClick={handleAddComponent}
            >
              Add Course
            </p>
            <p
              className="text-red-500 hover:cursor-pointer border-red-500 border p-2 rounded-lg hover:bg-red-500 hover:text-white"
              onClick={handleClearComponents}
            >
              Clear All
            </p>
          </div>
        </CardContent>
      </Card>
      <Button onClick={handleCalculateGPA}>Calculate</Button>
    </div>
  );
}

export default App;
