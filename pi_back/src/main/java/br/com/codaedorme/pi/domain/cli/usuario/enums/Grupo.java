package br.com.codaedorme.pi.domain.cli.usuario.enums;

public enum Grupo {
	ADMINISTRADOR("Administrador"), ESTOQUISTA("Estoquista");

	private final String descricao;

	Grupo(String descricao) {
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}
}