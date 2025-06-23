
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check } from "lucide-react";

interface CheckoutFormProps {
  planData: any;
  email: string;
  setEmail: (value: string) => void;
  name: string;
  setName: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  paymentMethod: "card" | "pix";
  setPaymentMethod: (value: "card" | "pix") => void;
  isLoading: boolean;
  onSubmit: () => void;
}

const CheckoutForm = ({
  planData,
  email,
  setEmail,
  name,
  setName,
  phone,
  setPhone,
  paymentMethod,
  setPaymentMethod,
  isLoading,
  onSubmit,
}: CheckoutFormProps) => {
  // Remove R$ duplicado se existir
  const cleanPrice = planData.price?.replace(/^R\$\s*R\$\s*/, 'R$ ') || planData.price;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Resumo do Plano</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-bold text-gray-900">{planData.title}</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">{cleanPrice}</p>
          <p className="text-sm text-gray-500 mb-4">{planData.period}</p>
          <ul className="space-y-2">
            {planData.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-green-600 mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Label htmlFor="name">Nome Completo *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome completo"
              className="mt-1"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              className="mt-1"
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Telefone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(XX) XXXXX-XXXX"
              className="mt-1"
              required
            />
          </div>
        </div>

        <div>
          <Label>Forma de pagamento</Label>
          <RadioGroup
            value={paymentMethod}
            onValueChange={(value) => setPaymentMethod(value as "card" | "pix")}
            className="mt-2 space-y-2"
          >
            <div className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="flex-grow cursor-pointer">Cartão de crédito</Label>
            </div>
            <div className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200">
              <RadioGroupItem value="pix" id="pix" />
              <Label htmlFor="pix" className="flex-grow cursor-pointer">PIX</Label>
            </div>
          </RadioGroup>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Processando..." : "Finalizar Pagamento"}
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
