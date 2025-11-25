import { AppLayout } from "@/components/AppLayout";

export default function Index() {
  return (
    <AppLayout>
      <div className="space-y-4">
        <p className="text-muted-foreground">
          This is the main content area. Add your content here.
        </p>
      </div>
    </AppLayout>
  );
}
