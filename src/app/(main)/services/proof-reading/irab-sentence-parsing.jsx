"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Save, FileDown, RefreshCw } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import LoadingOverlay from "@/components/shared/LoadingOverlay";
import useDownloadPdf from "@/hooks/useDownloadPdf";
import axiosInstance from "@/lib/axios";
import { useUser } from "@/contexts/UserContext";
import SignInModal from "@/components/shared/SignInModal";
import { useRouter } from "next/navigation";
import { useActivityLog } from "@/contexts/ActivityLogContext";
import { motion } from "framer-motion";
import ServiceTitle from "@/components/shared/ServiceTitle";
import ServiceDescription from "@/components/shared/ServiceDescription";

export function IrabSentenceParsingComponent() {
  const [inputText, setInputText] = useState("");
  const [parsingResult, setParsingResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { downloadPdf } = useDownloadPdf();
  const router = useRouter();
  const { isAuthenticated, user } = useUser();
  const { addActivityLog } = useActivityLog();
  const [showSignInModal, setShowSignInModal] = useState(false);

  const handleSignIn = () => {
    setShowSignInModal(false);
    router.push("/login");
  };

  const handleCloseSignInModal = () => {
    setShowSignInModal(false);
  };

  const handleParseSentence = async () => {
    setIsLoading(true);

    try {
      // Make the API request with axiosInstance
      const response = await axiosInstance.post("/watson/proofread", {
        content: inputText,
      });

      // Get the generated text from the response
      const generatedText = response?.data?.generated_text;

      setParsingResult(generatedText);
    } catch (error) {
      console.error("Error generating child stories:", error);
      toast({
        title: "Error",
        description: "Failed to generate email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveResult = () => {
    if (!isAuthenticated) {
      setShowSignInModal(true);
      return;
    }

    addActivityLog({
      input: inputText,
      output: parsingResult,
      userId: user?.id,
      serviceType: "PROOF_READ",
    });

    toast({
      title: "تم حفظ نتيجة الإعراب",
      description: "تم حفظ نتيجة الإعراب الخاصة بك بنجاح في سجل الأنشطة.",
    });
  };

  const handleExportResult = () => {
    if (!isAuthenticated) {
      setShowSignInModal(true);
      return;
    }

    if (parsingResult) {
      downloadPdf(parsingResult, "parsingResult.pdf");
    }
  };

  const handleReset = () => {
    setInputText("");
    setParsingResult("");
  };

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />

      <SignInModal
        open={showSignInModal}
        onSignIn={handleSignIn}
        onClose={handleCloseSignInModal}
      />

      <ServiceTitle title="خدمة الإعراب " />


      <ServiceDescription
      videoPath="/videos/Checking document.json"
        description="
      تهدف إلى مساعدة المستخدمين في تحليل الجمل العربية وفهم وظائف الكلمات فيها من الناحية النحوية. تقدم الخدمة إعراباً تفصيلياً لكل كلمة في النص المدخل، مما يساعد في توضيح موقعها النحوي ودورها داخل الجملة. هذه الخدمة مفيدة للطلاب، المعلمين، والباحثين وكل من يرغب في تحسين معرفته بقواعد اللغة العربية وفهم تركيب الجمل بشكل أفضل. يعتمد النظام على تقنيات متقدمة في معالجة اللغة العربية لضمان دقة الإعراب وتقديم النتائج بشكل سريع وسهل الاستخدام
      "
      />

      <div className="min-h-screen bg-white p-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="space-y-6 pt-4">
            <Textarea
              placeholder="أدخل الجملة التي تريد إعرابها هنا."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full h-32 p-4 border-2 border-[#1C9AAF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#20b1c9]"
              dir="rtl"
            />
            <Button
              onClick={handleParseSentence}
              disabled={isLoading || !inputText}
              className="w-full bg-[#20b1c9] hover:bg-[#1C9AAF] text-white"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> الإعراب
                  Sentence...
                </>
              ) : (
                "إعراب الجملة"
              )}
            </Button>

            {parsingResult && (
              <div
                className="p-4 border-2 border-[#1C9AAF] rounded-md bg-[#f0f9fa]"
                dir="rtl"
              >
                <h2 className="text-xl font-semibold mb-2 text-[#20b1c9]">
                  نتيجة الإعراب:
                </h2>
                <pre className="whitespace-pre-wrap text-sm">
                  {parsingResult}
                </pre>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-center gap-4 md:justify-between md:gap-0 flex-wrap">
            <Button
              onClick={handleSaveResult}
              disabled={!parsingResult}
              className="bg-[#1C9AAF] hover:bg-[#20b1c9] text-white"
            >
              <Save className="mr-2 h-4 w-4" /> حفظ النتيجة
            </Button>
            <Button
              onClick={handleExportResult}
              disabled={!parsingResult}
              className="bg-[#1C9AAF] hover:bg-[#20b1c9] text-white"
            >
              <FileDown className="mr-2 h-4 w-4" /> تصدير النتائج
            </Button>
            <Button
              onClick={handleReset}
              className="bg-white text-[#20b1c9] border-2 border-[#20b1c9] hover:bg-[#20b1c9] hover:text-white"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> إعادة تعيين
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
