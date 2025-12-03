import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataFetchingFilterProps {
  department: string;
  memberName: string;
  joinDate: string;
  onDepartmentChange: (value: string) => void;
  onMemberNameChange: (value: string) => void;
  onJoinDateChange: (value: string) => void;
}

export function DataFetchingFilter({
  department,
  memberName,
  joinDate,
  onDepartmentChange,
  onMemberNameChange,
  onJoinDateChange,
}: DataFetchingFilterProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:gap-6">
      <div className="w-full md:w-[200px] space-y-2">
        <Label htmlFor="department" className="text-sm font-medium">
          部署
        </Label>
        <Select value={department} onValueChange={onDepartmentChange}>
          <SelectTrigger id="department" className="h-10">
            <SelectValue placeholder="部署を選択" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="エンタメ事業部">エンタメ事業部</SelectItem>
            <SelectItem value="CTO室">CTO室</SelectItem>
            <SelectItem value="社長室">社長室</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 space-y-2">
        <Label htmlFor="memberName" className="text-sm font-medium">
          メンバー名
        </Label>
        <Input
          id="memberName"
          placeholder="山田　花子"
          value={memberName}
          onChange={(e) => onMemberNameChange(e.target.value)}
          className="h-10"
        />
      </div>

      <div className="w-full md:w-[200px] space-y-2">
        <Label htmlFor="joinDate" className="text-sm font-medium">
          入社時期
        </Label>
        <Input
          id="joinDate"
          placeholder="20XX.6-"
          value={joinDate}
          onChange={(e) => onJoinDateChange(e.target.value)}
          className="h-10"
        />
      </div>
    </div>
  );
}
