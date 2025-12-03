import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowDownUp } from "lucide-react";

export interface Employee {
  id: string;
  name: string;
  previousEvaluation: string;
  employeeNumber: string;
  department: string;
  joinDate: string;
  employmentType: string;
}

interface DataFetchingTableProps {
  employees: Employee[];
  selectedEmployees: Set<string>;
  onToggleEmployee: (id: string) => void;
  onToggleAll: () => void;
}

export function DataFetchingTable({
  employees,
  selectedEmployees,
  onToggleEmployee,
  onToggleAll,
}: DataFetchingTableProps) {
  const getInitials = (name: string) => {
    const parts = name.split(" ");
    return parts.map((p) => p[0]).join("");
  };

  const allSelected = employees.length > 0 && selectedEmployees.size === employees.length;
  const someSelected = selectedEmployees.size > 0 && selectedEmployees.size < employees.length;

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] px-4">
              <Checkbox
                checked={allSelected}
                onCheckedChange={onToggleAll}
                aria-label="Select all"
                className={someSelected ? "data-[state=checked]:bg-primary" : ""}
              />
            </TableHead>
            <TableHead className="px-4">
              <div className="flex items-center gap-2.5">
                <span className="text-sm font-medium text-muted-foreground">評価対象者</span>
                <ArrowDownUp className="h-4 w-4 text-muted-foreground" />
              </div>
            </TableHead>
            <TableHead className="px-4 w-[110px]">
              <div className="flex items-center gap-2.5">
                <span className="text-sm font-medium text-muted-foreground">前回評価</span>
              </div>
            </TableHead>
            <TableHead className="px-4">
              <div className="flex items-center gap-2.5">
                <span className="text-sm font-medium text-muted-foreground">社員番号</span>
                <ArrowDownUp className="h-4 w-4 text-muted-foreground" />
              </div>
            </TableHead>
            <TableHead className="px-4">
              <div className="flex items-center gap-2.5">
                <span className="text-sm font-medium text-muted-foreground">部署</span>
                <ArrowDownUp className="h-4 w-4 text-muted-foreground" />
              </div>
            </TableHead>
            <TableHead className="px-4">
              <div className="flex items-center gap-2.5">
                <span className="text-sm font-medium text-muted-foreground">入社日</span>
                <ArrowDownUp className="h-4 w-4 text-muted-foreground" />
              </div>
            </TableHead>
            <TableHead className="px-4">
              <div className="flex items-center gap-2.5">
                <span className="text-sm font-medium text-muted-foreground">雇用形態</span>
                <ArrowDownUp className="h-4 w-4 text-muted-foreground" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className="text-center text-muted-foreground py-8"
              >
                データがありません
              </TableCell>
            </TableRow>
          ) : (
            employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell className="px-4">
                  <Checkbox
                    checked={selectedEmployees.has(employee.id)}
                    onCheckedChange={() => onToggleEmployee(employee.id)}
                    aria-label={`Select ${employee.name}`}
                  />
                </TableCell>
                <TableCell className="px-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">
                        {getInitials(employee.name)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{employee.name}</span>
                  </div>
                </TableCell>
                <TableCell className="px-4">
                  <Badge 
                    className="bg-sky-100 text-sky-700 hover:bg-sky-100 border-0 rounded-full px-3 py-0.5 text-xs font-normal"
                  >
                    {employee.previousEvaluation}
                  </Badge>
                </TableCell>
                <TableCell className="px-4">
                  <span className="text-sm">{employee.employeeNumber}</span>
                </TableCell>
                <TableCell className="px-4">
                  <span className="text-sm">{employee.department}</span>
                </TableCell>
                <TableCell className="px-4">
                  <span className="text-sm">{employee.joinDate}</span>
                </TableCell>
                <TableCell className="px-4">
                  <span className="text-sm">{employee.employmentType}</span>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
