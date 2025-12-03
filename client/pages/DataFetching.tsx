import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DataFetchingFilter } from "@/components/DataFetchingFilter";
import { DataFetchingTable, type Employee } from "@/components/DataFetchingTable";

const mockEmployees: Employee[] = Array.from({ length: 20 }, (_, i) => ({
  id: `emp-${i + 1}`,
  name: "山田 花子",
  employmentType: "正社員",
  department: "エンタメ事業本部",
  joinDate: "2025/11/17",
}));

export default function DataFetching() {
  const [selectedEmployees, setSelectedEmployees] = useState<Set<string>>(
    new Set(["emp-1", "emp-2", "emp-3"]),
  );
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

  return (
    <AppLayout>
      <div className="flex flex-col gap-6 p-8">
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
                  <span className="text-xs font-semibold text-muted-foreground">
                    対象（80名）
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="excluded"
                  className="rounded-none border-b-3 border-gray-200 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none h-10 px-3"
                >
                  <span className="text-xs font-semibold text-muted-foreground">
                    対象外(10名）
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="text-lg font-bold leading-7">
                {selectedEmployees.size}名選択
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 whitespace-nowrap text-sm font-medium"
                >
                  前回のデータを反映
                </Button>
                <Button
                  size="sm"
                  className="h-9 whitespace-nowrap text-sm font-medium"
                >
                  評価対象外にする
                </Button>
              </div>
            </div>
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
