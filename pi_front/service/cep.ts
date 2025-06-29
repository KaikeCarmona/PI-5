import { api } from "@/service/api";

export interface Address {
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export const getAddress = async (cep: string): Promise<Address | null> => {
  try {
    const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
    const data = response.data;

    if (data.erro) {
      return null;
    }

    return {
      cep: cep,
      logradouro: data.logradouro,
      numero: "", // o usuário irá preencher
      complemento: data.complemento || "",
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf,
    };
  } catch (error) {
    console.error("Erro ao buscar o CEP:", error);
    return null;
  }
};
