
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface UserInfoFormProps {
  name: string;
  email: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
}

const UserInfoForm = ({ name, email, onNameChange, onEmailChange }: UserInfoFormProps) => {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Seus Dados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Nome Completo *</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              placeholder="Digite seu nome completo"
              className="mt-1"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder="Digite seu e-mail"
              className="mt-1"
              required
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfoForm;
