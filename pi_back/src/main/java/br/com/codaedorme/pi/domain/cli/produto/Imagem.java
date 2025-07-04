package br.com.codaedorme.pi.domain.cli.produto;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Imagem")
public class Imagem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(length = 255, nullable = false)
	private String nome;

	@Column(length = 255, nullable = false)
	private String diretorioDestino;

	@Column(nullable = false)
	private Boolean imagemPrincipal;

	@ManyToOne
	@JoinColumn(name = "produto_id")
	@JsonBackReference
	private Produto produto;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDiretorioDestino() {
		String[] partes = this.diretorioDestino.replace("\\", "/").split("/");
		String nomeArquivo = partes[partes.length - 1];
		return "/imagens/" + this.produto.getId() + "/" + nomeArquivo;
	}

	public void setDiretorioDestino(String diretorioDestino) {
		this.diretorioDestino = diretorioDestino;
	}

	public Boolean getImagemPrincipal() {
		return imagemPrincipal;
	}

	public void setImagemPrincipal(Boolean imagemPrincipal) {
		this.imagemPrincipal = imagemPrincipal;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

	// @Override
	// public String toString() {
	// return "Imagem ID: " + id + " | Nome: " + nome + " | Diretorio Destino: " +
	// diretorioDestino
	// + " | Imagem Principal: " + imagemPrincipal + " | Id do produto: " +
	// produto.getId();
	// }

	@Override
	public String toString() {
		return "Imagem ID: " + id + " | Nome: " + nome + " | Diretorio Destino: " + diretorioDestino
				+ " | Imagem Principal: " + imagemPrincipal;
	}
}
