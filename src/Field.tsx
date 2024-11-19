import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

interface Props {
  id: number;
  data: {
    grade: string;
    units: string;
    name: string;
  };
  updateField: (updatedField: { grade?: string; units?: string; name?: string }) => void;
}

function Field({ id, data, updateField }: Props) {
  return (
    <div className="row flex gap-4" key={id}>
      <Input
        className="w-full"
        placeholder="Course Name"
        value={data.name || ""}
        onChange={(e) => updateField({ name: e.target.value })}
      />
      <Select value={data.grade} onValueChange={(value) => updateField({ grade: value })}>
        <SelectTrigger className="w-1/4">
          <SelectValue placeholder={"Grade"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Grade</SelectLabel>
            <SelectItem value={"5"}>A</SelectItem>
            <SelectItem value={"4"}>B</SelectItem>
            <SelectItem value={"3"}>C</SelectItem>
            <SelectItem value={"2"}>D</SelectItem>
            <SelectItem value={"1"}>E</SelectItem>
            <SelectItem value={"0"}>F</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input
        className="w-1/2"
        placeholder="Units"
        value={data.units}
        onChange={(e) => updateField({ units: e.target.value })}
      />
    </div>
  );
}

export default Field;
