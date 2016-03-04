ChiSquareTail <- function(U, df, xlim = c(0, 10), col = fadeColor("black", "22"), axes = TRUE,
                          ...) {
  ## Created by Tatiana
  ## Function from OpenIntro
  ## Draw a Chi-square distribution with df degrees of freedom and shade the area above U
  
  x <- c(0, seq(xlim[1], xlim[2] + 3, length.out = 300))
  y <- c(0, dchisq(x[-1], df))
  plot(x, y, type = 'l', axes = FALSE, xlim = xlim, lwd=2, 
       main = bquote("Distribuição "* chi[.(df)]^2), xlab="")
  abline(h = 0)
  if (axes) {
    axis(1)
  }
  
  these <- which(x >= U)
  X <- x[c(these[1], these, rev(these)[1])]
  Y <- c(0, y[these], 0)
  polygon(X, Y, col = COL[1])
}