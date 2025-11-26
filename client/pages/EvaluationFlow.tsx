import { AppLayout } from "@/components/AppLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Clock } from "lucide-react";

type TaskStatus = "done" | "in-progress" | "not-started";

interface TimelineTask {
  id: string;
  status: TaskStatus;
  deadline: string;
  period?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonDisabled?: boolean;
}

const tasks: TimelineTask[] = [
  {
    id: "1",
    status: "done",
    deadline: "期日：2025-12-01 23:59",
    title: "各タスクの期���設定",
    description: "後続の各タスクの期日を設定し、評価フローを進める準備をしてください。",
    buttonText: "設定する",
    buttonDisabled: true,
  },
  {
    id: "2",
    status: "done",
    deadline: "期日：2025-12-01 23:59",
    title: "被評価者の設定",
    description: "評価の対象となる従業員を設定してください。",
    buttonText: "設定する",
    buttonDisabled: true,
  },
  {
    id: "3",
    status: "in-progress",
    deadline: "期日：2025-12-01 23:59",
    title: "評価者選定依頼",
    description: "被評価者が自分の評価者（上司・同僚）を選定します。管理者は、被評価者へ評価者選定依頼を送信してください。",
    buttonText: "依頼準備をする",
  },
  {
    id: "4",
    status: "not-started",
    deadline: "期日：2025-12-16 00:00 〜 2025-12-18 23:59",
    period: "依頼期間　2025-12-16 〜 2025-12-18",
    title: "評価者選定状況の確認",
    description: "評価者選定の進捗を確認します。管理者は、期日までに全員の回答が完了していることを確認してください。",
    buttonText: "確認する",
    buttonDisabled: true,
  },
  {
    id: "5",
    status: "not-started",
    deadline: "期日：2025-12-01 23:59",
    title: "マネージャーによる選定内容の承認",
    description: "マネージャーが被評価者の評価者を承認します。管理者は、マネージャーへ承認依頼を送信してください。",
    buttonText: "依頼準備をする",
    buttonDisabled: true,
  },
  {
    id: "6",
    status: "not-started",
    deadline: "期日：2025-12-16 00:00 〜 2025-12-18 23:59",
    period: "依頼期間　2025-12-16 〜 2025-12-18",
    title: "マネージャー承認状況の確認",
    description: "評価者承認の進捗を確認します。管理者は、期日までに全マネージャーの回答が完了していることを確認してください。",
    buttonText: "確認する",
    buttonDisabled: true,
  },
  {
    id: "7",
    status: "not-started",
    deadline: "期日：2025-12-01 23:59",
    title: "360度評価フォームの公開",
    description: "360度評価の回答を開始します。管理者は、評価項目に不備がないか確認し、フォームを公開してください。",
    buttonText: "公開準備をする",
    buttonDisabled: true,
  },
  {
    id: "8",
    status: "not-started",
    deadline: "期日：2025-12-16 00:00 〜 2025-12-18 23:59",
    period: "依頼期間　2025-12-16 〜 2025-12-18",
    title: "回答状況の確認",
    description: "評価フォームの回答状況を確認します。管理者は、期日までに全員の回答が完了していることを確認してください。",
    buttonText: "確認する",
    buttonDisabled: true,
  },
  {
    id: "9",
    status: "not-started",
    deadline: "期日：2025-12-01 23:59",
    title: "スコア集計",
    description: "評価結果を集計します。",
    buttonText: "集計する",
    buttonDisabled: true,
  },
  {
    id: "10",
    status: "not-started",
    deadline: "期日：2025-12-01 23:59",
    title: "スコア妥当性チェック",
    description: "集計結果を確認し、異常値や入力ミスがないかを確認します。管理者は、必要に応じて修正を行ってください。",
    buttonText: "確認する",
    buttonDisabled: true,
  },
  {
    id: "11",
    status: "not-started",
    deadline: "期日：2025-12-01 23:59",
    title: "スコア公開",
    description: "被評価者へ最終スコアを公開します。",
    buttonText: "公開準備をする",
    buttonDisabled: true,
  },
];

function StatusBadge({ status }: { status: TaskStatus }) {
  if (status === "done") {
    return (
      <Badge className="gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-white hover:bg-blue-600">
        <CheckCircle2 className="h-3.5 w-3.5" />
        完了
      </Badge>
    );
  }
  
  if (status === "in-progress") {
    return (
      <Badge 
        variant="outline" 
        className="gap-1 rounded-full border-2 border-blue-600 bg-white px-2.5 py-1 text-blue-600 hover:bg-white"
      >
        <Circle className="h-3.5 w-3.5 fill-blue-600" />
        進行中
      </Badge>
    );
  }
  
  return (
    <Badge 
      variant="outline" 
      className="gap-1 rounded-full bg-gray-200 px-2.5 py-1 text-gray-600 hover:bg-gray-200"
    >
      <svg className="h-3.5 w-3.5" viewBox="0 0 15 15" fill="none">
        <path
          d="M9.21675 13.1137C9.51203 13.1169 9.77476 13.3272 9.83305 13.6284C9.89959 13.9726 9.67379 14.3058 9.32957 14.3724L8.99951 14.4283C8.22611 14.5399 7.43822 14.5212 6.66951 14.3724C6.32549 14.3056 6.10042 13.9725 6.16696 13.6284C6.23357 13.2842 6.56678 13.0593 6.91099 13.1258C7.63013 13.265 8.36988 13.265 9.08902 13.1258L9.21675 13.1137ZM12.826 10.615C13.0373 10.4085 13.3719 10.372 13.6259 10.5441C13.9161 10.7408 13.9914 11.1359 13.7947 11.4261L13.5998 11.6993C13.1295 12.3263 12.5566 12.8704 11.9048 13.3086L11.792 13.3692C11.5188 13.4816 11.1949 13.3908 11.0237 13.1361C10.8283 12.8451 10.9062 12.4506 11.1971 12.255L11.4218 12.0965C11.9364 11.7135 12.3833 11.2459 12.7439 10.7138L12.826 10.615ZM3.24397 10.697C3.60259 11.2305 4.0482 11.6994 4.56141 12.0844L4.78611 12.2438L4.88495 12.3259C5.09123 12.5372 5.12697 12.8718 4.95487 13.1258C4.78268 13.3795 4.45919 13.4694 4.1866 13.3561L4.07378 13.2946L3.79966 13.0997C3.17275 12.6295 2.62846 12.0564 2.19039 11.4047L2.71718 11.0513L3.24397 10.697ZM2.36288 10.5236C2.65389 10.328 3.04836 10.406 3.24397 10.697L2.19039 11.4047C1.99508 11.1137 2.07208 10.7192 2.36288 10.5236ZM1.87152 5.66691C2.2156 5.7336 2.44054 6.06681 2.37407 6.41094C2.23489 7.13007 2.23489 7.8698 2.37407 8.58894C2.44043 8.93301 2.21556 9.2663 1.87152 9.33296C1.52725 9.39959 1.19411 9.17375 1.12748 8.82949C0.957524 7.95108 0.957488 7.04786 1.12748 6.16945C1.19431 5.82544 1.5274 5.60031 1.87152 5.66691ZM14.8725 6.16945C15.0425 7.04783 15.0425 7.9511 14.8725 8.82949L14.8352 8.95256C14.7223 9.22548 14.4298 9.39113 14.1285 9.33296C13.7843 9.26636 13.5595 8.93309 13.6259 8.58894L13.6716 8.31762C13.7629 7.68469 13.7477 7.04003 13.6259 6.41094L14.2488 6.29066L14.8725 6.16945ZM14.1285 5.66691C14.4725 5.60046 14.8058 5.82548 14.8725 6.16945L13.6259 6.41094C13.5594 6.06672 13.7843 5.73352 14.1285 5.66691ZM11.0442 1.87405C11.2163 1.62013 11.5398 1.53065 11.8125 1.64376L11.9262 1.70436L12.1994 1.90016C12.7368 2.30324 13.2137 2.78126 13.6148 3.32015L13.8087 3.59426L13.8693 3.70801C13.9816 3.98114 13.8908 4.30415 13.6362 4.47535C13.3815 4.64655 13.0477 4.60892 12.8372 4.40169L12.7551 4.30286L12.5966 4.07816C12.2682 3.63693 11.8777 3.24552 11.4377 2.9155L11.2139 2.75607L11.1151 2.67309C10.9089 2.46179 10.8722 2.12799 11.0442 1.87405ZM4.20804 1.62977C4.48101 1.51763 4.80416 1.60859 4.97539 1.86286C5.14652 2.11747 5.10874 2.45136 4.90173 2.6619L4.8029 2.74395C4.19314 3.15381 3.66821 3.67785 3.25609 4.28608C3.05938 4.57629 2.66432 4.65151 2.37407 4.45484C2.08404 4.25816 2.00797 3.86394 2.20437 3.57375C2.70779 2.83078 3.34947 2.19105 4.09429 1.69038L4.20804 1.62977ZM6.91099 1.87405C6.56687 1.94053 6.23365 1.71559 6.16696 1.37151C6.10036 1.0274 6.32549 0.694303 6.66951 0.627482L6.91099 1.87405ZM6.66951 0.627482C7.54792 0.457488 8.45115 0.457524 9.32957 0.627482C9.67383 0.694105 9.89967 1.02725 9.83305 1.37151C9.76638 1.71555 9.43309 1.94042 9.08902 1.87405C8.36988 1.73488 7.63013 1.73488 6.91099 1.87405L6.79072 1.2503L6.66951 0.627482Z"
          fill="currentColor"
        />
      </svg>
      未着手
    </Badge>
  );
}

function TimelineConnector({ status, isFirst }: { status: TaskStatus; isFirst?: boolean }) {
  const colorClass = status === "done" || status === "in-progress" 
    ? "bg-blue-600" 
    : "bg-gray-300";
  
  return (
    <div className="hidden md:flex md:flex-col md:items-center md:gap-2">
      {isFirst && (
        <div className={`h-9 w-1 rounded-full ${colorClass}`} />
      )}
      <StatusBadge status={status} />
      <div className={`flex-1 w-1 rounded-full ${colorClass} min-h-[72px]`} />
    </div>
  );
}

function TimelineItem({ task, isFirst }: { task: TimelineTask; isFirst?: boolean }) {
  const bgClass = task.status === "in-progress" ? "bg-white" : "bg-gray-50";
  const textColorClass = task.status === "in-progress" ? "text-foreground" : "text-muted-foreground";
  const titleColorClass = task.status === "in-progress" ? "text-card-foreground" : "text-muted-foreground";
  const deadlineBgClass = task.status === "in-progress" ? "bg-green-50" : "bg-gray-200";
  const deadlineTextClass = task.status === "in-progress" ? "text-teal-600" : "text-muted-foreground";

  return (
    <div className="flex items-start gap-4 md:gap-[15px]">
      <TimelineConnector status={task.status} isFirst={isFirst} />
      
      <div className="flex-1 pt-4">
        <div className={`flex flex-col gap-5 rounded-lg border border-border p-5 ${bgClass}`}>
          <div className="flex flex-col gap-1.5">
            <div className="md:hidden mb-2">
              <StatusBadge status={task.status} />
            </div>
            
            <Badge 
              className={`self-start rounded-full px-3 py-1 text-xs font-medium ${deadlineBgClass} ${deadlineTextClass} hover:${deadlineBgClass}`}
            >
              {task.deadline}
            </Badge>
            
            <div className="space-y-1">
              <h3 className={`text-base md:text-lg font-bold leading-7 ${titleColorClass}`}>
                {task.title}
              </h3>
              <p className={`text-sm md:text-base leading-6 ${textColorClass}`}>
                {task.description}
              </p>
            </div>
            
            {task.period && (
              <div className="flex items-center gap-2 mt-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm md:text-base text-muted-foreground">{task.period}</span>
              </div>
            )}
          </div>
          
          <Button 
            variant="outline" 
            className="self-end"
            disabled={task.buttonDisabled}
          >
            {task.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function EvaluationFlow() {
  return (
    <AppLayout>
      <div className="w-full space-y-5 pb-4 md:pb-0">
        <div className="border-b border-border bg-white px-4 py-5 md:px-7">
          <nav className="flex items-center gap-2.5 text-sm">
            <a href="/" className="text-muted-foreground hover:text-foreground">
              評価期間一覧
            </a>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M8.29302 5.29297C8.68354 4.90245 9.31655 4.90245 9.70708 5.29297L15.7071 11.293C16.0976 11.6835 16.0976 12.3165 15.7071 12.707L9.70708 18.707C9.31655 19.0976 8.68354 19.0976 8.29302 18.707C7.90249 18.3165 7.90249 17.6835 8.29302 17.293L13.586 12L8.29302 6.70703C7.90249 6.31651 7.90249 5.68349 8.29302 5.29297Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-foreground">2025-9月期-360度評価</span>
          </nav>
        </div>

        <div className="space-y-5 px-4 md:px-0">
          <div className="px-0 md:px-7">
            <h1 className="text-2xl font-semibold">2025-9月期-360度評価</h1>
          </div>

          <div className="space-y-1.5 rounded-xl border border-border bg-gray-50 p-6 md:mx-7 md:p-7">
            <h2 className="text-lg font-bold leading-[18px]">360度評価進行フロー</h2>
            <p className="text-sm leading-5">
              この画面では、360度評価の進行を管理します。<br className="hidden md:inline" />
              管理者は、各タスクを期日までに完了させてください。
            </p>

            <div className="pt-1.5">
              {tasks.map((task, index) => (
                <TimelineItem 
                  key={task.id} 
                  task={task} 
                  isFirst={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
