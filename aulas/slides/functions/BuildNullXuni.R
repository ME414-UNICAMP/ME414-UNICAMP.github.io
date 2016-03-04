BuildNullXuni <- function(xlim = c(-10, 10)) {
  normTail(0, 1.70, L = -1000, U = 1000,
           df = 50, lwd = 2.5, axes = FALSE,
           curveColor = COL[1],
           xlim = xlim)
  axis(1, at = c(-2, 0, 2),labels=c(expression(-z[alpha]),0,expression(z[alpha])))
  mtext(expression(sqrt(n)(bar(X) - mu[0])/sigma),
        side = 1, line = 2.8)
  text(1.2, 0.2, "Distribuição sob H0", col = COL[1], pos = 4)
  lines(rep(0, 2), c(0, dnorm(0, 0, 1.70)),
        col = COL[1,4], lwd = 0.5)
}
