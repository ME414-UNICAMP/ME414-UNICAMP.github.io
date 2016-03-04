FTail <- function(U, df1, df2, xlim = c(0, 5), col = fadeColor("black", "22"), axes = TRUE, ...) {
  ## Created by Tatiana
  ## Function from OpenIntro
  ## Draw a F distribution with df1 and df2 degrees of freedom and shade the area above U
  
  library(openintro)
  
  x <- seq(0, xlim[2], length.out = 300)
  y <- df(x, df1, df2)
  dfs <- paste(df1, df2, sep=",")
  plot(x, y, type = 'l', axes = FALSE, xlim = xlim, lwd=2, 
       main = bquote("Distribuição "* F[.(dfs)]), xlab="", ylab="")
  abline(h = 0)
  if (axes) {
    axis(1)
  }
  
  temp <- which(x >= U)
  x <- x[c(temp, rev(temp), temp[1])]
  y <- c(y[temp], rep(0, length(temp)), y[temp[1]])
  polygon(x, y, col = COL[1])
}