plotcdf <- function(x, p, atcdf=FALSE){
  ## CDF de uma variável aleatória discreta assumindo valores x com probabilidade p
  
  cdf <- c(0, cumsum(p))
  par(mar=c(c(5, 4, 2, 1) + 0.1))
  plot(x, cumsum(p), pch=20, ylim=c(0, 1.1), xlim=c(min(x)-2, max(x)+1), bty="l", xlab="x", ylab="F(x)", 
       cex.lab=1.5, cex.axis=1.5, cex=2, axes=FALSE, main="Função de Distribuição Acumulada")
  ## mtext("F(x)", side=2, line=0, cex=1.5)
  abline(h=0, v=0, lwd=2)
  axis(1, pos=0, at=x)
  if (atcdf) axis(2, pos=0, las=1, at=c(cumsum(p))) else axis(2, pos=0, las=1, at=seq(.2, 1, by=.2))
  abline(h=1, lty=2, col=2, lwd=2)
  segments(c(min(x)-2, x), cdf, x1=c(x, max(x)+1)-.05, col = "blue", lwd=3)
  points(x, cumsum(p), pch=19)
  points(x, cdf[1:(length(cdf)-1)], lwd=1)
}