import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DataFetchingFilter } from "@/components/DataFetchingFilter";
import { DataFetchingTable, type Employee } from "@/components/DataFetchingTable";

const employeeNames = [
  "森 光",
  "中野 悠斗",
  "原 玲",
  "黒田 早紀子",
  "長谷川 真由美",
  "小林 陸斗",
  "アレクサンドロ・マリオ・フェルナンデス＝ロドリゲス",
  "山田 花子",
];

const mockEmployees: Employee[] = Array.from({ length: 20 }, (_, i) => ({
  id: `emp-${i + 1}`,
  name: employeeNames[i % employeeNames.length],
  previousEvaluation: "対象",
  employeeNumber: "123456789",
  department: "エンタメ事業本部",
  joinDate: "2025/11/17",
  employmentType: "正社員",
}));

export default function DataFetching() {
  const [selectedEmployees, setSelectedEmployees] = useState<Set<string>>(new Set());
  const [department, setDepartment] = useState("エンタメ事業部");
  const [memberName, setMemberName] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [activeTab, setActiveTab] = useState("target");

  const toggleEmployee = (id: string) => {
    const newSelected = new Set(selectedEmployees);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedEmployees(newSelected);
  };

  const toggleAll = () => {
    if (selectedEmployees.size === mockEmployees.length) {
      setSelectedEmployees(new Set());
    } else {
      setSelectedEmployees(new Set(mockEmployees.map((e) => e.id)));
    }
  };

  const handleReset = () => {
    setDepartment("エンタメ事業部");
    setMemberName("");
    setJoinDate("");
    setSelectedEmployees(new Set());
  };

  return (
    <AppLayout>
      <div className="flex flex-col gap-4 p-8">
        <DataFetchingFilter
          department={department}
          memberName={memberName}
          joinDate={joinDate}
          onDepartmentChange={setDepartment}
          onMemberNameChange={setMemberName}
          onJoinDateChange={setJoinDate}
        />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full lg:w-auto">
              <TabsList className="grid w-full lg:w-[400px] grid-cols-2 h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="target"
                  className="rounded-none border-b-4 border-gray-200 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none h-10 px-3"
                >
                  <span className="text-sm font-semibold text-muted-foreground">
                    対象（80名）
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="excluded"
                  className="rounded-none border-b-3 border-gray-200 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none h-10 px-3"
                >
                  <span className="text-sm font-semibold text-muted-foreground">
                    対象外(10名）
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="h-9 whitespace-nowrap text-sm font-medium"
            >
              デフォルトへリセット
            </Button>
          </div>

          <TabsContent value="target" className="mt-0">
            <DataFetchingTable
              employees={mockEmployees}
              selectedEmployees={selectedEmployees}
              onToggleEmployee={toggleEmployee}
              onToggleAll={toggleAll}
            />
          </TabsContent>

          <TabsContent value="excluded" className="mt-0">
            <DataFetchingTable
              employees={[]}
              selectedEmployees={new Set()}
              onToggleEmployee={() => {}}
              onToggleAll={() => {}}
            />
          </TabsContent>
        </div>
      </div>
    </AppLayout>
  );
}
