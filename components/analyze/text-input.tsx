import { Textarea } from "@/components/ui/textarea";

interface TextInputProps {
  text: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function TextInput({ text, onChange, placeholder }: TextInputProps) {
  return (
    <div className="space-y-4">
      <Textarea
        placeholder={placeholder || "Paste your legal document text here..."}
        className="min-h-[300px] p-4 text-base"
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
