
import { Shield } from "lucide-react";

const TrialSecurityNotice = () => {
  return (
    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
      <div className="flex items-center gap-2 mb-2">
        <Shield className="h-4 w-4 text-blue-600" />
        <p className="font-medium text-blue-800 text-sm">Seus dados estão 100% seguros</p>
      </div>
      <p className="text-xs text-blue-700">
        • Utilizamos criptografia avançada<br/>
        • Não compartilhamos com terceiros<br/>
        • Conformidade com LGPD<br/>
        • Dados usados apenas para consultoria personalizada
      </p>
    </div>
  );
};

export default TrialSecurityNotice;
