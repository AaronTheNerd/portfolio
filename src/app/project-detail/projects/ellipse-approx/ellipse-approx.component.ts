import { Component } from '@angular/core';
import { EllipseApprox } from '../../../_models/ellipse_approx.model';

@Component({
  selector: 'app-ellipse-approx',
  templateUrl: './ellipse-approx.component.html'
})
export class EllipseApproxComponent {
  approximations = [
    new EllipseApprox(1731, "\\pi\\left(a+b\\right)\\left(3-\\sqrt{4-h}\\right)", "assets/ellipse_approx_1.png"),
    new EllipseApprox(1319, "\\pi\\left(a+b\\right)\\left(\\frac{184329-1792\\sqrt{h}}{143367}\\right)^h", "assets/ellipse_approx_7.png"),
    new EllipseApprox(909, "\\pi\\left(a+b\\right)\\left(\\frac{117}{5}-3h\\right)^{7h\\frac{\\pi}{6^\\pi}}", "assets/ellipse_approx_2.png"),
    new EllipseApprox(814, "\\pi\\left(a+b\\right)\\left(1+\\sqrt{\\frac{10-h}{24}}\\right)^{h/2}", "assets/ellipse_approx_3.png"),
    new EllipseApprox(779, "\\pi(a+b)\\left(\\frac{1}{7}h+1\\right)3^{h\\sqrt{3}/18}", "assets/ellipse_approx_5.png"),
    new EllipseApprox(778, "\\pi\\left(a+b\\right)\\left(\\frac{\\left(\\frac{1}{h + 6}\\right)^6}{8}+\\frac{4}{3}\\right)^{h/2}", "assets/ellipse_approx_4.png"),
    new EllipseApprox(767, "\\pi\\left(a+b\\right)\\left(\\frac{\\pi}{\\sqrt{6}}-\\frac{h}{80-4^{-4}}\\right)^h", "assets/ellipse_approx_6.png"),
  ];
}
