package br.com.codaedorme.pi.domain.cli.usuario.enums;

public enum Status {
	ATIVO("Ativo"), INATIVO("Inativo");

	private final String descricao;

	Status(String descricao) {
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}
}
