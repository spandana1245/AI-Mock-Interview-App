import Headings from "@/components/headings";
import { InterviewPin } from "@/components/interview-pin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/config/firebase.config";
import type { Interview } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export const Dashboard = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useAuth();

  useEffect(() => {
    const interviewQuery = query(
      collection(db, "interviews"),
      where("userId", "==", userId)
    );

    const unsubscribe = onSnapshot(
      interviewQuery,
      (snapshot) => {
        const interviewList: Interview[] = snapshot.docs.map((doc) =>
          doc.data()
        ) as Interview[];
        setInterviews(interviewList);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching interviews:", error);
        toast.error("Unable to fetch interviews.", {
          description: "Please try again later.",
        });
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  return (
    <div className="w-full space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <Headings
          title="Your Interview Hub"
          description="View, create, and manage your AI-powered mock interviews."
        />
        <Link to="/generate/create">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="mr-2 h-4 w-4" />
            New Interview
          </Button>
        </Link>
      </div>

      <Separator />

      {/* Interviews Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-28 rounded-lg" />
          ))
        ) : interviews.length > 0 ? (
          interviews.map((interview) => (
            <InterviewPin key={interview.id} data={interview} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center text-center py-16">
            <img
              src="/svg/not-found.svg"
              alt="No interviews"
              className="w-32 h-32 mb-4"
            />
            <h2 className="text-lg font-semibold text-muted-foreground">
              No Interviews Yet
            </h2>
            <p className="mt-2 max-w-md text-sm text-gray-500">
              It looks like you haven't created any mock interviews yet. Click below to get started.
            </p>
            <Link to="/generate/create" className="mt-4">
              <Button className="bg-blue-600 text-white">
                <Plus className="mr-2 h-4 w-4" />
                Create One
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
