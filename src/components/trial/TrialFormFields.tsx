
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TrialFormFieldsProps {
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  patrimonio: string;
  setPatrimonio: (value: string) => void;
  valorMensal: string;
  setValorMensal: (value: string) => void;
  errors: {
    email?: string;
    phone?: string;
    patrimonio?: string;
    valorMensal?: string;
  };
}

const TrialFormFields = ({
  email,
  setEmail,
  phone,
  handlePhoneChange,
  patrimonio,
  setPatrimonio,
  valorMensal,
  setValorMensal,
  errors,
}: TrialFormFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefone *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+55 (11) 99999-9999"
          value={phone}
          onChange={handlePhoneChange}
          className={errors.phone ? "border-red-500" : ""}
          maxLength={19}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="patrimonio">Patrimônio líquido investido *</Label>
        <Select value={patrimonio} onValueChange={setPatrimonio}>
          <SelectTrigger className={errors.patrimonio ? "border-red-500" : ""}>
            <SelectValue placeholder="Selecione..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="até-50mil">Até R$ 50 mil</SelectItem>
            <SelectItem value="50mil-150mil">R$ 50 mil - R$ 150 mil</SelectItem>
            <SelectItem value="150mil-300mil">R$ 150 mil - R$ 300 mil</SelectItem>
            <SelectItem value="300mil-500mil">R$ 300 mil - R$ 500 mil</SelectItem>
            <SelectItem value="500mil-1milhao">R$ 500 mil - R$ 1 milhão</SelectItem>
            <SelectItem value="acima-1milhao">Acima de R$ 1 milhão</SelectItem>
          </SelectContent>
        </Select>
        {errors.patrimonio && (
          <p className="text-sm text-red-500">{errors.patrimonio}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="valorMensal">Valor disponível para investir por mês *</Label>
        <Select value={valorMensal} onValueChange={setValorMensal}>
          <SelectTrigger className={errors.valorMensal ? "border-red-500" : ""}>
            <SelectValue placeholder="Selecione..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="até-300">Até R$ 300</SelectItem>
            <SelectItem value="300-500">R$ 300 - R$ 500</SelectItem>
            <SelectItem value="500-1000">R$ 500 - R$ 1.000</SelectItem>
            <SelectItem value="1000-3000">R$ 1.000 - R$ 3.000</SelectItem>
            <SelectItem value="3000-5000">R$ 3.000 - R$ 5.000</SelectItem>
            <SelectItem value="5000-10000">R$ 5.000 - R$ 10.000</SelectItem>
            <SelectItem value="acima-10000">Acima de R$ 10.000</SelectItem>
          </SelectContent>
        </Select>
        {errors.valorMensal && (
          <p className="text-sm text-red-500">{errors.valorMensal}</p>
        )}
      </div>
    </>
  );
};

export default TrialFormFields;
