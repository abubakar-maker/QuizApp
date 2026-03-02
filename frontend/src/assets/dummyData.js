const questionsData = {
  math: {
    unit1: {
      basic: [
        {
          id: 1,
          question: "The function f(x) = x is called:",
          options: ["Linear function", "Identity function", "Quadratic function", "Cubic function"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "If y is expressed in terms of x, then y is called:",
          options: ["Explicit function", "Implicit function", "Composite function", "Inverse function"],
          correctAnswer: 0
        },
        {
          id: 3,
          question: "\\cosh^2x - \\sinh^2x equals:",
          options: ["-1", "0", "1", "2"],
          correctAnswer: 2
        },
        {
          id: 4,
          question: "\\text{cosech } x equals:",
          options: ["\\frac{2}{e^x+e^{-x}}", "\\frac{1}{e^x+e^{-x}}", "\\frac{2}{e^x-e^{-x}}", "e^x-e^{-x}"],
          correctAnswer: 2
        },
        {
          id: 5,
          question: "If f(x)=x^2-2x+1, then f(0) is:",
          options: ["-1", "0", "1", "2"],
          correctAnswer: 2
        },
        {
          id: 6,
          question: "The set of all possible inputs of a function is called:",
          options: ["Range", "Codomain", "Domain", "Image"],
          correctAnswer: 2
        },
        {
          id: 7,
          question: "The notation f(x) was introduced by:",
          options: ["Newton", "Leibnitz", "Euler", "Lagrange"],
          correctAnswer: 2
        },
        {
          id: 8,
          question: "If f(x)=3x+2, then f(1) equals:",
          options: ["3", "4", "5", "6"],
          correctAnswer: 1
        },
        {
          id: 9,
          question: "A function having one-to-one correspondence is called:",
          options: ["Into", "Many-one", "Bijective", "Surjective"],
          correctAnswer: 2
        },
        {
          id: 10,
          question: "Range of f(x)=x^2 is:",
          options: ["All real numbers", "x \\geq 0", "x \\leq 0", "x \\neq 0"],
          correctAnswer: 1
        },
        {
          id: 11,
          question: "If f(x)=ax+b, then f is:",
          options: ["Quadratic", "Cubic", "Linear", "Constant"],
          correctAnswer: 2
        },
        {
          id: 12,
          question: "Inverse of f(x)=x is:",
          options: ["x", "1/x", "-x", "x^2"],
          correctAnswer: 0
        },
        {
          id: 13,
          question: "\\sin^2x + \\cos^2x equals:",
          options: ["0", "1", "2", "-1"],
          correctAnswer: 1
        },
        {
          id: 14,
          question: "If f(x)=x^3, then f(-1) is:",
          options: ["1", "-1", "0", "3"],
          correctAnswer: 1
        },
        {
          id: 15,
          question: "The graph of f(x)=x^2 is:",
          options: ["Straight line", "Parabola", "Circle", "Hyperbola"],
          correctAnswer: 1
        },
        {
          id: 16,
          question: "A function with same domain and codomain is:",
          options: ["Into", "Onto", "Identity", "Constant"],
          correctAnswer: 2
        },
        {
          id: 17,
          question: "The output values of a function are called:",
          options: ["Domain", "Range", "Codomain", "Inputs"],
          correctAnswer: 1
        },
        {
          id: 18,
          question: "If f(x)=5, then f is:",
          options: ["Linear", "Constant", "Quadratic", "Identity"],
          correctAnswer: 1
        },
        {
          id: 19,
          question: "If f(x)=|x|, then f(-3) equals:",
          options: ["-3", "0", "3", "6"],
          correctAnswer: 2
        },
        {
          id: 20,
          question: "A function which is not one-to-one is:",
          options: ["Identity", "Many-one", "Bijective", "Inverse"],
          correctAnswer: 1
        },
        {
          id: 21,
          question: "If f(x)=x+1, then f^{-1}(x) is:",
          options: ["x-1", "x+1", "1-x", "-x"],
          correctAnswer: 0
        },
        {
          id: 22,
          question: "The graph of y=mx+c is:",
          options: ["Circle", "Parabola", "Straight line", "Hyperbola"],
          correctAnswer: 2
        },
        {
          id: 23,
          question: "A function can have:",
          options: ["One output", "Two outputs", "No output", "Multiple outputs"],
          correctAnswer: 0
        },
        {
          id: 24,
          question: "If f(x)=x^2, then f(2) is:",
          options: ["2", "4", "6", "8"],
          correctAnswer: 1
        },
        {
          id: 25,
          question: "If f(x)=1/x, domain excludes:",
          options: ["1", "0", "-1", "2"],
          correctAnswer: 1
        }
      ],
      intermediate: [
        {
          id: 1,
          question: "\\lim_{x \\to a} \\frac{x^3 - a^3}{x - a} equals:",
          options: ["a^2", "2a", "3a^2", "0"],
          correctAnswer: 2
        },
        {
          id: 2,
          question: "\\lim_{x \\to 0} (1+x)^{1/x} equals:",
          options: ["1", "e", "e^2", "0"],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "\\lim_{x \\to 0} \\frac{\\sin x}{x} equals:",
          options: ["0", "1", "\\infty", "Undefined"],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "\\lim_{x \\to 0} \\frac{e^x - 1}{x} equals:",
          options: ["0", "1", "e", "\\infty"],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "\\lim_{x \\to 0} \\frac{1}{x} is:",
          options: ["0", "1", "\\infty", "Does not exist"],
          correctAnswer: 3
        },
        {
          id: 6,
          question: "If \\lim f(x) exists, then left and right limits are:",
          options: ["Unequal", "Equal", "Infinite", "Zero"],
          correctAnswer: 1
        },
        {
          id: 7,
          question: "\\lim_{x \\to 2} \\frac{x^2-4}{x-2} equals:",
          options: ["2", "4", "0", "Does not exist"],
          correctAnswer: 1
        },
        {
          id: 8,
          question: "\\lim_{x \\to 0} \\cos x equals:",
          options: ["0", "1", "-1", "\\infty"],
          correctAnswer: 1
        },
        {
          id: 9,
          question: "\\lim_{x \\to 0} \\frac{\\tan x}{x} equals:",
          options: ["0", "1", "\\infty", "Undefined"],
          correctAnswer: 1
        },
        {
          id: 10,
          question: "\\lim_{x \\to a} \\frac{x-a}{x-a} equals:",
          options: ["0", "1", "a", "Undefined"],
          correctAnswer: 1
        },
        {
          id: 11,
          question: "\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x-4} equals:",
          options: ["1/4", "1/2", "1", "2"],
          correctAnswer: 0
        },
        {
          id: 12,
          question: "\\lim_{x \\to 0} \\frac{\\log(1+x)}{x} equals:",
          options: ["0", "1", "e", "\\infty"],
          correctAnswer: 1
        },
        {
          id: 13,
          question: "If limit is finite, function is:",
          options: ["Continuous", "Discontinuous", "Infinite", "Undefined"],
          correctAnswer: 0
        },
        {
          id: 14,
          question: "\\lim_{x \\to 0} \\frac{x^2}{x} equals:",
          options: ["0", "1", "\\infty", "Does not exist"],
          correctAnswer: 0
        },
        {
          id: 15,
          question: "\\lim_{x \\to 0} \\frac{1-\\cos x}{x^2} equals:",
          options: ["0", "1", "1/2", "\\infty"],
          correctAnswer: 2
        },
        {
          id: 16,
          question: "\\lim_{x \\to 0} \\frac{x^3}{x^2} equals:",
          options: ["0", "1", "\\infty", "Does not exist"],
          correctAnswer: 0
        },
        {
          id: 17,
          question: "If f(x)=|x|, then \\lim_{x \\to 0} f(x) equals:",
          options: ["0", "1", "\\infty", "Does not exist"],
          correctAnswer: 0
        },
        {
          id: 18,
          question: "\\lim_{x \\to 0} e^x equals:",
          options: ["0", "1", "e", "\\infty"],
          correctAnswer: 1
        },
        {
          id: 19,
          question: "\\lim_{x \\to 0} \\frac{x}{x} equals:",
          options: ["0", "1", "\\infty", "Undefined"],
          correctAnswer: 1
        },
        {
          id: 20,
          question: "\\lim_{x \\to 0} \\frac{\\sin x}{\\tan x} equals:",
          options: ["0", "1", "\\infty", "Undefined"],
          correctAnswer: 1
        },
        {
          id: 21,
          question: "If limit is not same from both sides, it:",
          options: ["Exists", "Is infinite", "Does not exist", "Is zero"],
          correctAnswer: 2
        },
        {
          id: 22,
          question: "\\lim_{x \\to 1} \\frac{x-1}{x^2-1} equals:",
          options: ["1/2", "1", "2", "Undefined"],
          correctAnswer: 0
        },
        {
          id: 23,
          question: "\\lim_{x \\to 0} x equals:",
          options: ["0", "1", "\\infty", "Undefined"],
          correctAnswer: 0
        },
        {
          id: 24,
          question: "\\lim_{x \\to 0} \\frac{2x}{x} equals:",
          options: ["0", "1", "2", "\\infty"],
          correctAnswer: 2
        },
        {
          id: 25,
          question: "\\lim_{x \\to 0} \\frac{1}{x^2} equals:",
          options: ["0", "\\infty", "1", "Undefined"],
          correctAnswer: 1
        }
      ],
      advanced: [
        {
          id: 1,
          question: "\\lim_{x \\to 0} \\frac{\\sin ax}{x} equals:",
          options: ["a", "0", "1", "\\infty"],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "\\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3} equals:",
          options: ["0", "1/3", "1/2", "\\infty"],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2} equals:",
          options: ["1", "1/2", "0", "\\infty"],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "\\lim_{x \\to 0} \\frac{1-\\cos x}{x^2} equals:",
          options: ["0", "1", "1/2", "\\infty"],
          correctAnswer: 2
        },
        {
          id: 5,
          question: "\\lim_{x \\to 0} \\frac{\\log(1+x) - x}{x^2} equals:",
          options: ["-1/2", "1/2", "0", "\\infty"],
          correctAnswer: 0
        },
        {
          id: 6,
          question: "\\lim_{x \\to 0} \\frac{x-\\sin x}{x^3} equals:",
          options: ["1/6", "1/3", "1/2", "0"],
          correctAnswer: 0
        },
        {
          id: 7,
          question: "\\lim_{x \\to 0} \\frac{\\tan x - x}{x^3} equals:",
          options: ["1/3", "2/3", "1/2", "0"],
          correctAnswer: 1
        },
        {
          id: 8,
          question: "\\lim_{x \\to 0} \\frac{e^{2x} - 1}{x} equals:",
          options: ["1", "2", "e", "0"],
          correctAnswer: 1
        },
        {
          id: 9,
          question: "\\lim_{x \\to 0} \\frac{a^x - 1}{x} equals:",
          options: ["\\log a", "a", "1", "0"],
          correctAnswer: 0
        },
        {
          id: 10,
          question: "\\lim_{x \\to 0} \\frac{\\sin^2x}{x^2} equals:",
          options: ["0", "1", "2", "\\infty"],
          correctAnswer: 1
        },
        {
          id: 11,
          question: "\\lim_{x \\to \\infty} (1+x)^{1/x} equals:",
          options: ["1", "e", "0", "\\infty"],
          correctAnswer: 0
        },
        {
          id: 12,
          question: "\\lim_{x \\to \\infty} \\frac{x}{\\sqrt{1+x^2}} equals:",
          options: ["0", "1", "\\infty", "-1"],
          correctAnswer: 1
        },
        {
          id: 13,
          question: "\\lim_{x \\to \\infty} \\frac{x^2}{e^x} equals:",
          options: ["0", "1", "\\infty", "Undefined"],
          correctAnswer: 0
        },
        {
          id: 14,
          question: "\\lim_{x \\to \\infty} \\frac{\\log x}{x} equals:",
          options: ["0", "1", "\\infty", "Undefined"],
          correctAnswer: 0
        },
        {
          id: 15,
          question: "\\lim_{x \\to \\infty} \\frac{x}{\\log x} equals:",
          options: ["0", "1", "\\infty", "Undefined"],
          correctAnswer: 2
        },
        {
          id: 16,
          question: "\\lim_{x \\to \\infty} \\sin x equals:",
          options: ["0", "1", "Does not exist", "\\infty"],
          correctAnswer: 2
        },
        {
          id: 17,
          question: "\\lim_{x \\to \\infty} \\cos x equals:",
          options: ["0", "1", "Does not exist", "\\infty"],
          correctAnswer: 2
        },
        {
          id: 18,
          question: "\\lim_{x \\to \\infty} \\frac{x}{x+1} equals:",
          options: ["0", "1", "\\infty", "-1"],
          correctAnswer: 1
        },
        {
          id: 19,
          question: "\\lim_{x \\to \\infty} \\frac{x+1}{x} equals:",
          options: ["0", "1", "\\infty", "2"],
          correctAnswer: 1
        },
        {
          id: 20,
          question: "\\lim_{x \\to \\infty} \\frac{x^2+1}{x^2} equals:",
          options: ["1", "2", "\\infty", "0"],
          correctAnswer: 0
        },
        {
          id: 21,
          question: "\\lim_{x \\to \\infty} \\frac{1}{x} equals:",
          options: ["0", "1", "\\infty", "Undefined"],
          correctAnswer: 0
        },
        {
          id: 22,
          question: "\\lim_{x \\to \\infty} \\frac{1}{x^2} equals:",
          options: ["0", "1", "\\infty", "Undefined"],
          correctAnswer: 0
        },
        {
          id: 23,
          question: "\\lim_{x \\to \\infty} \\frac{e^x}{x} equals:",
          options: ["0", "1", "\\infty", "Undefined"],
          correctAnswer: 2
        },
        {
          id: 24,
          question: "\\lim_{x \\to \\infty} \\frac{x}{e^x} equals:",
          options: ["0", "1", "\\infty", "Undefined"],
          correctAnswer: 0
        },
        {
          id: 25,
          question: "\\lim_{x \\to \\infty} \\frac{\\log x}{x} equals:",
          options: ["0", "1", "\\infty", "Undefined"],
          correctAnswer: 0
        }
      ]
    },
    unit2: {
      basic: [
        {
          id: 1,
          question: "\\frac{d}{dx} (\\tan 3x) = ?",
          options: ["3 \\sec^2 3x", "\\sec^2 3x", "\\cot 3x", "\\sec^2 x"],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "The change in variable x is called increment of x. dx can be:",
          options: ["positive only", "negative only", "positive or negative", "none"],
          correctAnswer: 2
        },
        {
          id: 3,
          question: "The notation \\frac{dy}{dx} is used by:",
          options: ["Leibnitz", "Newton", "Lagrange", "Cauchy"],
          correctAnswer: 0
        },
        {
          id: 4,
          question: "The notation f(x) is used by:",
          options: ["Leibnitz", "Newton", "Lagrange", "Cauchy"],
          correctAnswer: 2
        },
        {
          id: 5,
          question: "The notation f'(x) is used by:",
          options: ["Leibnitz", "Newton", "Lagrange", "Cauchy"],
          correctAnswer: 2
        },
        {
          id: 6,
          question: "\\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a} equals:",
          options: ["f'(x)", "f'(a)", "f(0)", "f(x-a)"],
          correctAnswer: 1
        },
        {
          id: 7,
          question: "\\frac{d}{dx} (x^n) = nx^{n-1} is called:",
          options: ["Power rule", "Product rule", "Quotient rule", "Constant rule"],
          correctAnswer: 0
        },
        {
          id: 8,
          question: "\\frac{d}{dx} (\\sin a) = ?",
          options: ["\\cos a", "a \\cos a", "0", "-a \\cos a"],
          correctAnswer: 2
        },
        {
          id: 9,
          question: "\\frac{d}{dx} [f(x) + g(x)] = ?",
          options: ["f'(x)+g'(x)", "f'(x)-g'(x)", "f(x)g'(x)+f'(x)g(x)", "f(x)g'(x)-f'(x)g(x)"],
          correctAnswer: 0
        },
        {
          id: 10,
          question: "[f(x)g(x)]' = ?",
          options: ["f'(x)+g'(x)", "f'(x)-g'(x)", "f(x)g'(x)+f'(x)g(x)", "f(x)g'(x)-f'(x)g(x)"],
          correctAnswer: 2
        },
        {
          id: 11,
          question: "\\frac{d}{dx} (\\frac{1}{g(x)}) = ?",
          options: ["1/g(x)^2", "1/g'(x)", "g'(x)/g(x)^2", "-g'(x)/g(x)^2"],
          correctAnswer: 3
        },
        {
          id: 12,
          question: "(f \\circ g)'(x) = ?",
          options: ["f' g'", "f'(g(x))", "f'(g(x)) g'(x)", "cannot be calculated"],
          correctAnswer: 2
        },
        {
          id: 13,
          question: "\\frac{d}{dx} \\sec^{-1}x = ?",
          options: ["\\frac{1}{|x|\\sqrt{x^2-1}}", "-\\frac{1}{|x|\\sqrt{x^2-1}}", "\\frac{1}{|x|\\sqrt{1+x^2}}", "-\\frac{1}{|x|\\sqrt{1+x^2}}"],
          correctAnswer: 0
        },
        {
          id: 14,
          question: "The function f(x)=a^x is called:",
          options: ["Exponential", "Logarithmic", "Algebraic", "Composite"],
          correctAnswer: 0
        },
        {
          id: 15,
          question: "\\log_a a = ?",
          options: ["1", "a", "a^2", "not defined"],
          correctAnswer: 0
        },
        {
          id: 16,
          question: "\\frac{d}{dx} (\\log_{10}x) = ?",
          options: ["1/x \\log 10", "1/(x \\ln 10)", "\\ln x/x \\ln x", "\\ln 10/x \\ln x"],
          correctAnswer: 1
        },
        {
          id: 17,
          question: "\\frac{d}{dx} \\ln[f(x)] = ?",
          options: ["f'(x)", "\\ln f'(x)", "f'(x)/f(x)", "f(x)f'(x)"],
          correctAnswer: 2
        },
        {
          id: 18,
          question: "y = \\tanh^{-1}x is valid when:",
          options: ["x \\in R", "x \\in (-1,1)", "x \\in [-1,1]", "x>0"],
          correctAnswer: 1
        },
        {
          id: 19,
          question: "y = \\sinh^{-1}(ax+b), \\frac{dy}{dx} = ?",
          options: ["\\cosh^{-1}(ax+b)", "\\frac{1}{\\sqrt{1+(ax+b)^2}}", "\\frac{a}{\\sqrt{1+(ax+b)^2}}", "a \\cosh^{-1}(ax+b)"],
          correctAnswer: 2
        },
        {
          id: 20,
          question: "If y = e^{-ax} then \\frac{dy}{dx} = ?",
          options: ["-ae^{-ax}", "-a^2e^{-ax}", "a^2e^{-ax}", "a^2e^{ax}"],
          correctAnswer: 0
        },
        {
          id: 21,
          question: "f(x)=\\sin x is:",
          options: ["Linear", "Odd", "Even", "Identity"],
          correctAnswer: 1
        },
        {
          id: 22,
          question: "\\frac{d}{dx} (\\cos x) = ?",
          options: ["\\sin x", "-\\sin x", "\\cos x", "-\\cos x"],
          correctAnswer: 1
        },
        {
          id: 23,
          question: "At x=0, f(x)=1-x^3 has:",
          options: ["Maximum", "Minimum", "Point of inflection", "No conclusion"],
          correctAnswer: 2
        },
        {
          id: 24,
          question: "If f'(c)=0 and f''(c)<0 then f has:",
          options: ["Maximum", "Minimum", "Inflection", "None"],
          correctAnswer: 0
        },
        {
          id: 25,
          question: "\\frac{d}{dx} (x^{-2}) = ?",
          options: ["-2x^3", "-2x^2", "-2x^{-3}", "-2x"],
          correctAnswer: 2
        },
        {
          id: 26,
          question: "\\frac{d}{dx} (\\cos^{-1}x) = ?",
          options: ["\\frac{1}{\\sqrt{1-x^2}}", "-\\frac{1}{\\sqrt{x^2-1}}", "\\frac{1}{\\sqrt{x^2-1}}", "-\\frac{1}{\\sqrt{1-x^2}}"],
          correctAnswer: 3
        },
        {
          id: 27,
          question: "f(x)=ax^2+bx+c has minimum if:",
          options: ["a>0", "a<0", "a=0", "a=-1"],
          correctAnswer: 0
        },
        {
          id: 28,
          question: "Derivative of y=4x^4-3/x^3+2/x^2 is:",
          options: ["16x^3+9/x^4-4/x^3", "3x^3+2x^2", "3x^3", "None"],
          correctAnswer: 0
        },
        {
          id: 29,
          question: "If f'(x)=0 and f''(x) \\leq 0 then point is:",
          options: ["Maximum", "Minimum", "Inflection", "None"],
          correctAnswer: 0
        },
        {
          id: 30,
          question: "If f(x)=x^4+2x^3+x^2 then f'(0)=?",
          options: ["1", "0", "-4", "2"],
          correctAnswer: 1
        },
        {
          id: 31,
          question: "A point where f'(x)=0 is called:",
          options: ["Stationary point", "Corner point", "Concurrent point", "Common point"],
          correctAnswer: 0
        }
      ],
      intermediate: [
        {
          id: 1,
          question: "y = \\cosh^{-1}(\\sec x), \\frac{dy}{dx} = ?",
          options: ["\\cos x", "\\sec x", "-\\sin(\\sec x)", "-\\tanh^{-1}(\\sec x) \\cdot \\tan x"],
          correctAnswer: 3
        },
        {
          id: 2,
          question: "If y = e^{-ax}, then y'' = ?",
          options: ["-ae^{-ax}", "-a^2e^{-ax}", "a^2e^{-ax}", "a^2e^{ax}"],
          correctAnswer: 2
        },
        {
          id: 3,
          question: "If y = \\cos(ax + b), then y'' = ?",
          options: ["a^2 \\sin(ax+b)", "-a^2 \\sin(ax+b)", "-a^2 \\cos(ax+b)", "a^2 \\cos(ax+b)"],
          correctAnswer: 2
        },
        {
          id: 4,
          question: "Maclaurin series is a special case of:",
          options: ["Taylor series", "Power series", "Convergent series", "Geometric series"],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "1 - x + x^2 - x^3 + \\dots equals:",
          options: ["1/(1-x)", "1/(1+x)", "-1/(1+x)", "1/(x-1)"],
          correctAnswer: 1
        },
        {
          id: 6,
          question: "\\frac{dy}{dx} at (x_1,y_1) represents:",
          options: ["Increment", "Slope of tangent", "Slope of normal", "Horizontal slope"],
          correctAnswer: 1
        },
        {
          id: 7,
          question: "A function is increasing if:",
          options: [
            "f(x_2) > f(x_1) \\text{ when } x_2 > x_1",
            "f(x_2) > f(x_1) \\text{ when } x_2 < x_1",
            "f(x_2) < f(x_1) \\text{ when } x_2 > x_1",
            "f(x_2) < f(x_1) \\text{ when } x_2 < x_1"
          ],
          correctAnswer: 0
        },
        {
          id: 8,
          question: "If f is increasing, slope of tangent is:",
          options: ["Positive", "Negative", "Zero", "Undefined"],
          correctAnswer: 0
        },
        {
          id: 9,
          question: "A point where first derivative is zero is called:",
          options: ["Stationary point", "Corner point", "Concurrency point", "Common point"],
          correctAnswer: 0
        },
        {
          id: 10,
          question: "Maximum value of f(x)=x^2-x-2 is:",
          options: ["-9/2", "-9/4", "-1", "0"],
          correctAnswer: 1
        },
        {
          id: 11,
          question: "\\frac{d}{dx} (10 \\sin x) = ?",
          options: ["10 \\cos x", "10^{\\sin x} \\cos x \\ln 10", "10^{\\sin x} \\ln 10", "10 \\cos x \\ln 10"],
          correctAnswer: 1
        },
        {
          id: 12,
          question: "If f(x)=x^3+2x+9, then f'''(x)=?",
          options: ["3x^2+2", "3x^2", "6x", "2x"],
          correctAnswer: 2
        },
        {
          id: 13,
          question: "At x=0, f(x)=1-x^3 has:",
          options: ["Maximum", "Minimum", "Point of inflection", "No conclusion"],
          correctAnswer: 2
        },
        {
          id: 14,
          question: "If y = \\sin \\sqrt{x}, then \\frac{dy}{dx} = ?",
          options: ["\\frac{\\cos \\sqrt{x}}{2\\sqrt{x}}", "\\frac{\\cos \\sqrt{x}}{\\sqrt{x}}", "\\cos x \\sqrt{x}", "\\frac{\\cos x}{2\\sqrt{x}}"],
          correctAnswer: 0
        },
        {
          id: 15,
          question: "If f'(c)=0 and f''(c)>0 then f has:",
          options: ["Maximum", "Minimum", "Inflection", "None"],
          correctAnswer: 1
        },
        {
          id: 16,
          question: "\\frac{d}{dx} (\\frac{1}{\\cot x}) = ?",
          options: ["\\text{cosec}^2x", "\\sec^2x", "-\\sec^2x", "-\\text{cosec}^2x"],
          correctAnswer: 1
        },
        {
          id: 17,
          question: "\\frac{d}{dx} (e^{\\tan x}) = ?",
          options: ["e^{\\tan x} \\sec^2x", "e^{\\tan x}", "e^{\\tan x} \\ln \\sec^2x", "e^{\\tan x} \\ln \\tan x"],
          correctAnswer: 0
        },
        {
          id: 18,
          question: "x^3 \\frac{d}{dx} (\\ln 2x) = ?",
          options: ["x^3", "x^2", "3x^2", "6x^2"],
          correctAnswer: 1
        },
        {
          id: 19,
          question: "\\frac{d}{dx} (5^{x^3}) = ?",
          options: ["5^{x^3}/\\ln 5", "\\ln 5/5^{x^3}", "5^{x^3} \\ln 5", "3x^2 \\cdot 5^{x^3} \\ln 5"],
          correctAnswer: 3
        },
        {
          id: 20,
          question: "If y=e^{2x}, then y^{(4)} = ?",
          options: ["16e^{2x}", "8e^{2x}", "4e^{2x}", "2e^{2x}"],
          correctAnswer: 0
        },
        {
          id: 21,
          question: "\\frac{d}{dx} (\\text{cosec } x) = ?",
          options: ["\\text{cosec } x \\cot x", "\\text{cosec } x \\tan x", "-\\text{cosec } x \\cot x", "\\tan x"],
          correctAnswer: 2
        },
        {
          id: 22,
          question: "If f'(c)=0 and f''(c)<0 then f has:",
          options: ["Maximum", "Minimum", "Inflection", "None"],
          correctAnswer: 0
        },
        {
          id: 23,
          question: "A point where f'(x)=0 is called:",
          options: ["Critical point", "Stationary point", "Maximum point", "Minimum point"],
          correctAnswer: 1
        },
        {
          id: 24,
          question: "\\frac{d}{dx} (x^{-2}) = ?",
          options: ["-2x^3", "-2x^2", "-2x^{-3}", "-2x"],
          correctAnswer: 2
        },
        {
          id: 25,
          question: "\\lim_{\\Delta x \\to \\infty} \\frac{|\\Delta x|}{\\Delta x} equals:",
          options: ["1", "Does not exist", "-1", "0"],
          correctAnswer: 0
        },
        {
          id: 26,
          question: "Derivative of y=4x^4-3/x^3+2/x^2 is:",
          options: ["16x^3+9/x^4-4/x^3", "3x^3+2x^2", "3x^3", "None"],
          correctAnswer: 0
        },
        {
          id: 27,
          question: "If f'(x)=0 and f''(x) \\leq 0 then point is:",
          options: ["Relative maxima", "Relative minima", "Inflection", "None"],
          correctAnswer: 0
        },
        {
          id: 28,
          question: "Average rate of change of f is:",
          options: ["Derivative", "Differential", "Average slope", "Instantaneous change"],
          correctAnswer: 2
        },
        {
          id: 29,
          question: "If f(x)=x^4+2x^3+x^2 then f'(0)=?",
          options: ["1", "0", "-4", "2"],
          correctAnswer: 1
        },
        {
          id: 30,
          question: "(f \\circ g)'(x) = ?",
          options: ["f'(x)g'(x)", "f \\circ g'(x)", "f'(g(x))g'(x)", "f'(g'(x))"],
          correctAnswer: 2
        },
        {
          id: 31,
          question: "If y=\\sin^{-1}(x^3), \\frac{dy}{dx} = ?",
          options: [
            "\\frac{1}{\\sqrt{1+x^2}}",
            "\\frac{3x^2}{\\sqrt{1+x^3}}",
            "\\frac{1}{\\sqrt{1+x^6}}",
            "\\frac{3x^2}{\\sqrt{1+x^6}}"
          ],
          correctAnswer: 3
        }
      ],
      advanced: [
        {
          id: 1,
          question: "Taylor series expansion of f(x+h) is:",
          options: ["Power series", "Maclaurin series", "Taylor series", "All of these"],
          correctAnswer: 2
        },
        {
          id: 2,
          question: "If f'(x)>0 at x=c, then f is:",
          options: ["Increasing", "Decreasing", "Constant", "One-one"],
          correctAnswer: 0
        },
        {
          id: 3,
          question: "If f'(x)<0 at x=c, then f is:",
          options: ["Increasing", "Decreasing", "Constant", "One-one"],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "If f''(x)=0 at x=c, then f is:",
          options: ["Increasing", "Decreasing", "Constant", "One-one"],
          correctAnswer: 2
        },
        {
          id: 5,
          question: "A point where f is neither increasing nor decreasing is:",
          options: ["Stationary", "Turning", "Critical", "Inflection"],
          correctAnswer: 0
        },
        {
          id: 6,
          question: "A stationary point which is max or min is called:",
          options: ["Stationary", "Turning", "Critical", "Inflection"],
          correctAnswer: 1
        },
        {
          id: 7,
          question: "If f'(c)=0 or undefined, c is called:",
          options: ["Stationary value", "Turning value", "Critical value", "Inflection value"],
          correctAnswer: 2
        },
        {
          id: 8,
          question: "If f'(x) does not change sign at c, then point is:",
          options: ["Stationary", "Turning", "Critical", "Inflection"],
          correctAnswer: 3
        },
        {
          id: 9,
          question: "If f'(x) changes from + to - at c, then f has:",
          options: ["Maximum", "Minimum", "Inflection", "None"],
          correctAnswer: 0
        },
        {
          id: 10,
          question: "If f'(x) changes from - to + at c, then f has:",
          options: ["Maximum", "Minimum", "Inflection", "None"],
          correctAnswer: 1
        },
        {
          id: 11,
          question: "If f'(x) does not change sign at c, then f has:",
          options: ["Maximum", "Minimum", "Inflection", "None"],
          correctAnswer: 2
        },
        {
          id: 12,
          question: "If f(x)=e^{\\sqrt{x}-1} then f'(0) = ?",
          options: ["e-1", "e", "\\infty", "1/2"],
          correctAnswer: 2
        },
        {
          id: 13,
          question: "\\frac{d}{dx} (\\tan^{-1}x - \\cot^{-1}x) = ?",
          options: ["\\frac{2}{\\sqrt{1+x^2}}", "\\frac{2}{1+x^2}", "0", "-\\frac{2}{1+x^2}"],
          correctAnswer: 2
        },
        {
          id: 14,
          question: "If f(1/x)=\\tan x then f'(1/\\pi)=?",
          options: ["\\pi^2", "-\\pi^2", "1", "-1/\\pi^2"],
          correctAnswer: 0
        },
        {
          id: 15,
          question: "\\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h} = ?",
          options: ["0", "f(a)", "f(h)", "f'(a)"],
          correctAnswer: 3
        },
        {
          id: 16,
          question: "Critical point of f(x)=1/x is:",
          options: ["0", "1", "-1", "No point"],
          correctAnswer: 3
        },
        {
          id: 17,
          question: "If f is continuous on (x,x_1), then (f(x_1)-f(x))/(x_1-x) is:",
          options: ["Derivative", "Differential", "Average rate", "Instantaneous change"],
          correctAnswer: 2
        },
        {
          id: 18,
          question: "If limit of (f(x_1)-f(x))/(x_1-x) exists, it is:",
          options: ["Derivative", "Differential", "Average rate", "Actual change"],
          correctAnswer: 0
        },
        {
          id: 19,
          question: "If y=\\sin^{-1}(x^3), \\frac{dy}{dx} equals:",
          options: ["\\frac{1}{\\sqrt{1+x^2}}", "\\frac{3x^2}{\\sqrt{1+x^3}}", "\\frac{1}{\\sqrt{1+x^6}}", "\\frac{3x^2}{\\sqrt{1+x^6}}"],
          correctAnswer: 3
        },
        {
          id: 20,
          question: "If f'(x)>0 at x=c, f is:",
          options: ["Increasing", "Decreasing", "Constant", "One-one"],
          correctAnswer: 0
        },
        {
          id: 21,
          question: "If f'(x)<0 at x=c, f is:",
          options: ["Increasing", "Decreasing", "Constant", "One-one"],
          correctAnswer: 1
        },
        {
          id: 22,
          question: "If f''(x)=0 at x=c, f is:",
          options: ["Increasing", "Decreasing", "Constant", "One-one"],
          correctAnswer: 2
        },
        {
          id: 23,
          question: "Stationary point where slope is zero but no max/min is:",
          options: ["Stationary", "Turning", "Critical", "Inflection"],
          correctAnswer: 3
        },
        {
          id: 24,
          question: "Every stationary point is also a:",
          options: ["Turning point", "Critical point", "Inflection", "Max point"],
          correctAnswer: 1
        },
        {
          id: 25,
          question: "If f'(x)=0 and sign changes, point is:",
          options: ["Inflection", "Critical", "Turning", "Stationary"],
          correctAnswer: 2
        },
        {
          id: 26,
          question: "If f'(x)=0 and no sign change, point is:",
          options: ["Maximum", "Minimum", "Inflection", "None"],
          correctAnswer: 2
        },
        {
          id: 27,
          question: "Relative maxima occurs when f'(x) changes:",
          options: ["+ to -", "- to +", "No change", "Undefined"],
          correctAnswer: 0
        },
        {
          id: 28,
          question: "Relative minima occurs when f'(x) changes:",
          options: ["+ to -", "- to +", "No change", "Undefined"],
          correctAnswer: 1
        },
        {
          id: 29,
          question: "If f'(c) undefined, c is:",
          options: ["Stationary", "Turning", "Critical", "Inflection"],
          correctAnswer: 2
        },
        {
          id: 30,
          question: "If f'(x)=0 everywhere, f is:",
          options: ["Increasing", "Decreasing", "Constant", "One-one"],
          correctAnswer: 2
        },
        {
          id: 31,
          question: "Derivative represents:",
          options: ["Average change", "Instant change", "Slope", "All of these"],
          correctAnswer: 3
        }
      ]
    },
    unit3: {
      basic: [
        {
          id: 1,
          question: "If y = f(x), then the differential of y is:",
          options: ["dy = f'(x)", "dy = f'(x) dx", "dy = f(x) dx", "dy/dx"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "If \\int f(x) \\, dx = \\phi(x) + c, then f(x) is called:",
          options: ["Integral", "Differential", "Derivative", "Integrand"],
          correctAnswer: 3
        },
        {
          id: 3,
          question: "\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} is true for all values of n except:",
          options: ["n = 0", "n = 1", "n = -1", "n = any fractional value"],
          correctAnswer: 2
        },
        {
          id: 4,
          question: "\\int \\cos x \\, dx =",
          options: ["-\\sin x + c", "\\sin x + c", "-\\cos x + c", "\\cos x + c"],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "\\int \\frac{1}{ax+b} \\, dx equals:",
          options: ["-\\frac{1}{a} \\ln|ax+b|", "\\ln|ax+b|", "\\frac{1}{a} \\ln|ax+b|", "\\ln|x+b|"],
          correctAnswer: 2
        },
        {
          id: 6,
          question: "\\int \\sin 3x \\, dx is equal to:",
          options: ["\\frac{\\cos 3x}{3} + c", "-\\frac{\\cos 3x}{3} + c", "3 \\cos 3x + c", "-3 \\cos 3x"],
          correctAnswer: 1
        },
        {
          id: 7,
          question: "\\int \\frac{1}{x} \\, dx \\text{ as } x \\to \\infty equals:",
          options: ["0", "1", "\\infty", "Undefined"],
          correctAnswer: 0
        },
        {
          id: 8,
          question: "\\int 2x \\, dx is equal to:",
          options: ["x + c", "2 + c", "x^2 + c", "\\frac{x^2}{2} + c"],
          correctAnswer: 2
        },
        {
          id: 9,
          question: "The inverse of \\int \\dots \\, dx is:",
          options: ["d/dx", "dx", "d/dy", "dx/dy"],
          correctAnswer: 0
        },
        {
          id: 10,
          question: "\\int \\frac{1}{1+x^2} \\, dx =",
          options: ["\\tan^{-1} x + c", "\\sin^{-1} x + c", "\\cot^{-1} x + c", "\\cos^{-1} x + c"],
          correctAnswer: 0
        },
        {
          id: 11,
          question: "If a > 0 and a \\neq 1, then \\int a^x \\, dx =",
          options: ["a^x + c", "a^x \\ln a + c", "\\frac{a^x}{\\ln a} + c", "\\frac{a^{x+1}}{x+1} + c"],
          correctAnswer: 2
        },
        {
          id: 12,
          question: "\\int \\frac{1}{x\\sqrt{x^2-1}} \\, dx =",
          options: ["\\sec^{-1} x + c", "\\tan^{-1} x + c", "\\cot^{-1} x + c", "\\sin^{-1} x + c"],
          correctAnswer: 0
        },
        {
          id: 13,
          question: "\\int \\sin(ax+b) \\, dx =",
          options: ["-\\frac{1}{a} \\cos(ax+b)", "\\frac{1}{a} \\cos(ax+b)", "a \\cos(ax+b)", "-a \\cos(ax+b)"],
          correctAnswer: 0
        },
        {
          id: 14,
          question: "\\int e^x \\, dx =",
          options: ["e^x + c", "xe^x + c", "e^{x+1} + c", "\\ln x + c"],
          correctAnswer: 0
        },
        {
          id: 15,
          question: "\\int \\frac{1}{x^2} \\, dx \\text{ as } x \\to \\infty equals:",
          options: ["0", "1", "\\infty", "Undefined"],
          correctAnswer: 0
        }
      ],
      intermediate: [
        {
          id: 1,
          question: "If n \\neq -1, then \\int (ax+b)^n \\, dx =",
          options: ["n(ax+b)^{n-1}/a", "(ax+b)^{n+1}/n", "(ax+b)^{n+1}/(n+1)", "\\frac{(ax+b)^{n+1}}{a(n+1)}"],
          correctAnswer: 3
        },
        {
          id: 2,
          question: "The equation y = x^2 - 2x + c represents (c being a parameter):",
          options: ["One parabola", "Family of parabolas", "Family of lines", "Two parabolas"],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "\\int e^{\\sin(x)} \\cos x \\, dx =",
          options: ["e^{\\sin(x)}", "e^{\\cos(x)}", "e^{\\sin(x)}/\\sin x", "e^{\\sin(x)}/\\cos x"],
          correctAnswer: 0
        },
        {
          id: 4,
          question: "\\int (2x+3)^{1/2} \\, dx =",
          options: ["\\frac{1}{3} (2x+3)^{3/2}", "\\frac{1}{3} (2x+3)^{-1/2}", "\\frac{1}{3} (2x+3)", "None"],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "\\int_1^a a^x \\, dx =",
          options: ["(a^2-a) \\ln a", "\\frac{a^2-a}{\\ln a}", "\\frac{a^2-a}{\\log a}", "(a^2-a) \\ln a"],
          correctAnswer: 1
        },
        {
          id: 6,
          question: "\\int \\frac{e^{\\tan^{-1}(x)}}{1+x^2} \\, dx =",
          options: ["e^{\\tan(x)} + c", "1/e \\tan^{-1} x + c", "x e^{\\tan^{-1} x} + c", "e^{\\tan^{-1} x} + c"],
          correctAnswer: 3
        },
        {
          id: 7,
          question: "If \\int_0^1 f(x)dx=5 \\text{ and } \\int_0^1 g(x)dx=4, \\text{ then } \\int_0^1 [3f(x) - 2g(x)]dx =",
          options: ["7", "9", "12", "8"],
          correctAnswer: 0
        },
        {
          id: 8,
          question: "\\int \\frac{f'(x)}{f(x)} \\, dx =",
          options: ["\\ln x", "\\ln f(x)", "\\ln f'(x)", "f'(x) \\ln f(x)"],
          correctAnswer: 1
        },
        {
          id: 9,
          question: "\\int \\frac{1}{x \\ln x} \\, dx =",
          options: ["\\ln x + c", "x + c", "\\ln(\\ln x) + c", "\\ln(\\ln(\\ln x)) + c"],
          correctAnswer: 2
        },
        {
          id: 10,
          question: "\\int \\sec x \\, dx =",
          options: ["\\ln(\\sec x + \\tan x) + c", "\\ln(\\csc x - \\cot x) + c", "\\ln(\\sec x - \\tan x) + c", "-\\ln(\\csc x - \\cot x) + c"],
          correctAnswer: 0
        },
        {
          id: 11,
          question: "\\int_0^{\\pi/2} \\sin x \\, dx =",
          options: ["-2", "0", "2", "1"],
          correctAnswer: 3
        },
        {
          id: 12,
          question: "\\int \\frac{x+2}{x+1} \\, dx =",
          options: ["\\ln(x+1)", "\\ln(x+1)-x", "x + \\ln(x+1)", "None"],
          correctAnswer: 2
        },
        {
          id: 13,
          question: "\\int \\sin^3 x \\cos x \\, dx =",
          options: ["\\sin^3 x / 3", "1/4 \\sin^4 x", "-1/4 \\sin^4 x", "\\sin^4 x"],
          correctAnswer: 1
        },
        {
          id: 14,
          question: "\\int_0^3 \\frac{dx}{x^2+9} =",
          options: ["\\pi/4", "\\pi/12", "\\pi/2", "None"],
          correctAnswer: 1
        },
        {
          id: 15,
          question: "\\int_{-1}^1 |x| \\, dx =",
          options: ["1/2", "1", "2", "1/2"],
          correctAnswer: 1
        },
        {
          id: 16,
          question: "\\int_0^{\\pi/6} \\cos t \\, dt =",
          options: ["\\sqrt{3}/2 - 1/2", "1/2", "\\sqrt{3}/2", "None"],
          correctAnswer: 1
        },
        {
          id: 17,
          question: "If \\int_{-2}^1 f(x) \\, dx = 5 \\text{ and } \\int_{-2}^1 g(x) \\, dx = 4, \\text{ then } \\int_{-2}^1 [2f(x) + 3g(x)] \\, dx =",
          options: ["20", "23", "9", "22"],
          correctAnswer: 3
        },
        {
          id: 18,
          question: "\\int_0^1 (4x+k) \\, dx = 2, \\text{ then } k =",
          options: ["8", "-4", "0", "-2"],
          correctAnswer: 2
        },
        {
          id: 19,
          question: "\\int_{-\\pi}^\\pi \\sin x \\, dx =",
          options: ["2", "-2", "0", "-1"],
          correctAnswer: 2
        },
        {
          id: 20,
          question: "\\int_0^{\\pi/3} \\cos t \\, dt =",
          options: ["\\sqrt{3}/2", "1/2", "1", "None"],
          correctAnswer: 0
        }
      ],
      advanced: [
        {
          id: 1,
          question: "\\int e^{f(x)} f'(x) \\, dx =",
          options: ["\\ln f(x) + c", "e^{f(x)} + c", "\\ln f'(x) + c", "e^{f'(x)} + c"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "\\int \\frac{\\cos x}{\\sin x \\cdot \\ln \\sin x} \\, dx =",
          options: ["\\ln(\\ln \\cos x) + c", "\\ln(\\ln \\sin x) + c", "\\ln \\sin x + c", "\\ln \\cos x + c"],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "The solution of the differential equation \\frac{dy}{dx} = \\sec^2 x is:",
          options: ["y = \\cos x + c", "y = \\tan x + c", "y = \\sin x + c", "y = \\cot x + c"],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "\\int e^{ax} \\sin bx \\, dx =",
          options: [
            "\\frac{e^{ax}}{a^2+b^2} (a \\sin bx - b \\cos bx) + c",
            "\\frac{e^{ax}}{a^2+b^2} (b \\sin bx + a \\cos bx)",
            "\\frac{e^{ax}}{a^2+b^2} (a \\sin bx + b \\cos bx)",
            "\\frac{e^{ax}}{a^2+b^2} (b \\sin bx - a \\cos bx)"
          ],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "In \\int (x^2-a^2)^{1/2} \\, dx, the suitable substitution is:",
          options: ["x = a \\tan \\theta", "x = a \\sec \\theta", "x = a \\sin \\theta", "x = 2a \\sin \\theta"],
          correctAnswer: 1
        },
        {
          id: 6,
          question: "\\int x \\cos x \\, dx =",
          options: ["\\sin x + \\cos x", "\\cos x - \\sin x", "x \\sin x + \\cos x", "None"],
          correctAnswer: 2
        },
        {
          id: 7,
          question: "The solution of the differential equation \\frac{dv}{dt} = 2t - 7 is:",
          options: ["v = t^2-7t+c", "v = t^2+7t+c", "v = t-7t^2/2+c", "v = t^2-7t+c"],
          correctAnswer: 0
        },
        {
          id: 8,
          question: "The suitable substitution for \\int \\sqrt{2ax-x^2} \\, dx is:",
          options: ["x-a = a \\cos \\theta", "x-a = a \\sin \\theta", "x+a = a \\sin \\theta", "x+a = a \\cos \\theta"],
          correctAnswer: 1
        },
        {
          id: 9,
          question: "\\int u \\, dv equals:",
          options: ["v \\, du - \\int vu", "uv + \\int v \\, du", "uv - \\int v \\, du", "u \\, du + \\int v \\, du"],
          correctAnswer: 2
        },
        {
          id: 10,
          question: "The general solution of \\frac{dy}{dx} = -\\frac{y}{x} is:",
          options: ["x/y = c", "y/x = c", "xy = c", "x^2y^2 = c"],
          correctAnswer: 2
        },
        {
          id: 11,
          question: "\\int x e^x \\, dx =",
          options: ["x e^x + x", "x e^x - e^x", "e^x - x", "None"],
          correctAnswer: 1
        },
        {
          id: 12,
          question: "The solution of \\frac{dy}{dx} = -y is:",
          options: ["y = ce^{-x}", "y = ce^x", "xy = c", "None"],
          correctAnswer: 0
        },
        {
          id: 13,
          question: "\\int f(x) g'(x) \\, dx =",
          options: ["f(x)g(x) - \\int g(x)f'(x)dx", "f(x)g(x) + \\int g(x)f'(x)dx", "f(x)g'(x) - \\int g(x)f(x)dx", "f(x)g'(x) + \\int g(x)f(x)dx"],
          correctAnswer: 0
        },
        {
          id: 14,
          question: "\\int e^x [1/x + \\ln x] \\, dx =",
          options: ["e^x/x", "-e^x/x", "e^x \\ln x", "-e^x \\ln x"],
          correctAnswer: 2
        },
        {
          id: 15,
          question: "If \\frac{d}{dx} [\\frac{x}{1+2x}] = \\frac{1}{(2x+1)^2}, \\text{ then } \\int_1^2 \\frac{1}{(2x+1)^2} \\, dx =",
          options: ["9/2", "-9/2", "1/9", "2/9"],
          correctAnswer: 3
        },
        {
          id: 16,
          question: "\\int e^{\\sec x} \\cdot \\sec x \\tan x \\, dx =",
          options: ["e^{\\sec x} + c", "-e^{\\sec x} + c", "e^{\\sec x} \\tan x + c", "None"],
          correctAnswer: 0
        },
        {
          id: 17,
          question: "The solution of \\frac{dy}{dx} = \\frac{1}{\\sqrt{1-x^2}} is:",
          options: ["y = \\sin^{-1} x + c", "y = \\cos^{-1} x + c", "y = \\tan^{-1} x + c", "None"],
          correctAnswer: 0
        },
        {
          id: 18,
          question: "\\int e^x (1/x - 1/x^2) \\, dx =",
          options: ["e^x/x", "-e^x/x", "e^x \\ln x", "-e^x/x^2"],
          correctAnswer: 0
        }
      ]
    },
    unit4: {
      basic: [
        {
          id: 1,
          question: "If x < 0, y < 0 then the point P(x, y) lies in which quadrant?",
          options: ["I", "II", "III", "IV"],
          correctAnswer: 2
        },
        {
          id: 2,
          question: "The point corresponding to the ordered pair (x, y) is called:",
          options: ["graph of (x, y)", "mid-point", "abscissa", "ordinate"],
          correctAnswer: 0
        },
        {
          id: 3,
          question: "If x < 0, y > 0 then P(-x, -y) lies in which quadrant?",
          options: ["I", "II", "III", "IV"],
          correctAnswer: 3
        },
        {
          id: 4,
          question: "A line passing through a vertex and midpoint of opposite side is called:",
          options: ["median", "altitude", "perpendicular bisector", "normal"],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "A line passing through a vertex and perpendicular to opposite side is called:",
          options: ["median", "altitude", "perpendicular bisector", "normal"],
          correctAnswer: 1
        },
        {
          id: 6,
          question: "Point where medians of a triangle intersect is called:",
          options: ["centroid", "centre", "orthocentre", "circumcentre"],
          correctAnswer: 0
        },
        {
          id: 7,
          question: "Point where altitudes of a triangle intersect is called:",
          options: ["centroid", "centre", "orthocentre", "circumcentre"],
          correctAnswer: 2
        },
        {
          id: 8,
          question: "The centroid divides each median in the ratio:",
          options: ["2:1", "1:2", "1:1", "none"],
          correctAnswer: 0
        },
        {
          id: 9,
          question: "Point where angle bisectors of a triangle intersect is called:",
          options: ["centroid", "incentre", "circumcentre", "orthocentre"],
          correctAnswer: 1
        },
        {
          id: 10,
          question: "If x and y have opposite signs, the point lies in quadrants:",
          options: ["I & II", "I & III", "II & IV", "I & IV"],
          correctAnswer: 2
        },
        {
          id: 11,
          question: "Line bisecting 2nd and 4th quadrants has inclination:",
          options: ["0°", "45°", "135°", "x"],
          correctAnswer: 2
        },
        {
          id: 12,
          question: "The line y = x:",
          options: ["bisects 1st & 3rd quadrants", "parallel to x-axis", "bisects 2nd & 4th", "parallel to y-axis"],
          correctAnswer: 0
        },
        {
          id: 13,
          question: "Quadrilateral with all sides equal but angles not 90° is:",
          options: ["kite", "rhombus", "parallelogram", "trapezium"],
          correctAnswer: 1
        },
        {
          id: 14,
          question: "Correct range of inclination \\alpha is:",
          options: ["0 \\leq \\alpha \\leq \\pi", "\\pi \\leq \\alpha < 2\\pi", "0 < \\alpha < \\pi", "0 \\leq \\alpha < 2\\pi"],
          correctAnswer: 2
        },
        {
          id: 15,
          question: "Slope-intercept form is:",
          options: ["y = mx + c", "y - y_1 = m(x - x_1)", "x/a + y/b = 1", "x \\cos \\alpha + y \\sin \\alpha = p"],
          correctAnswer: 0
        },
        {
          id: 16,
          question: "Two-intercepts form of line is:",
          options: ["y = mx + c", "y - y_1 = m(x - x_1)", "x/a + y/b = 1", "x \\cos \\alpha + y \\sin \\alpha = p"],
          correctAnswer: 2
        },
        {
          id: 17,
          question: "Normal form of straight line is:",
          options: ["y = mx + c", "y - y_1 = m(x - x_1)", "x/a - y/b = 1", "x \\cos \\alpha + y \\sin \\alpha = p"],
          correctAnswer: 3
        }
      ],
      intermediate: [
        {
          id: 1,
          question: "In x \\cos \\alpha + y \\sin \\alpha = p, p is:",
          options: ["positive", "negative", "positive or negative", "zero"],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "Symmetric form of straight line is:",
          options: ["point-slope", "normal", "symmetric", "none"],
          correctAnswer: 2
        },
        {
          id: 3,
          question: "Slope of ax + by + c = 0 is:",
          options: ["a/b", "-a/b", "b/a", "-b/a"],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "Slope of line perpendicular to ax + by + c = 0 is:",
          options: ["a/b", "-a/b", "b/a", "-b/a"],
          correctAnswer: 2
        },
        {
          id: 5,
          question: "General equation of straight line is:",
          options: ["ax + by + c = 0", "ax^2 + by + c = 0", "ax + by^2 + c = 0", "ax^2 + by^2 + c = 0"],
          correctAnswer: 0
        },
        {
          id: 6,
          question: "x-intercept of 4x + 6y = 12 is:",
          options: ["4", "6", "3", "2"],
          correctAnswer: 2
        },
        {
          id: 7,
          question: "2x + y + 2 = 0 and 6x + 3y - 8 = 0 are:",
          options: ["parallel", "perpendicular", "neither", "non-coplanar"],
          correctAnswer: 0
        },
        {
          id: 8,
          question: "Point (-2, 4) lies \\dots the line 2x + 5y - 3 = 0:",
          options: ["above", "below", "on", "none"],
          correctAnswer: 0
        },
        {
          id: 9,
          question: "Three lines through one point are called:",
          options: ["parallel", "coincident", "concurrent", "congruent"],
          correctAnswer: 2
        },
        {
          id: 10,
          question: "2x + y + k = 0 represents:",
          options: ["one line", "two lines", "family of lines", "intersecting lines"],
          correctAnswer: 2
        },
        {
          id: 11,
          question: "Intersection of sides of a triangle gives:",
          options: ["vertices", "centre", "midpoints", "centroid"],
          correctAnswer: 0
        },
        {
          id: 12,
          question: "Quadrilateral with two parallel sides is:",
          options: ["square", "rhombus", "trapezium", "parallelogram"],
          correctAnswer: 2
        },
        {
          id: 13,
          question: "Equation of vertical line through (-5, 3) is:",
          options: ["x - 5 = 0", "x + 5 = 0", "y - 3 = 0", "y + 3 = 0"],
          correctAnswer: 1
        },
        {
          id: 14,
          question: "Equation of horizontal line through (-5, 5) is:",
          options: ["x - 5 = 0", "x + 5 = 0", "y - 3 = 0", "y + 3 = 0"],
          correctAnswer: 2
        },
        {
          id: 15,
          question: "Slope of y-axis is:",
          options: ["0", "undefined", "tan 180\\degree", "tan 45\\degree"],
          correctAnswer: 1
        },
        {
          id: 16,
          question: "Point lies in 2nd quadrant if:",
          options: ["x>0,y<0", "x<0,y<0", "x<0,y>0", "x>0,y>0"],
          correctAnswer: 2
        },
        {
          id: 17,
          question: "Equation y^2 - 16 = 0 represents lines:",
          options: ["parallel to x-axis", "parallel to y-axis", "not parallel to x-axis", "not parallel to y-axis"],
          correctAnswer: 0
        }
      ],
      advanced: [
        {
          id: 1,
          question: "Two lines with slopes m_1 and m_2 are parallel if:",
          options: ["m_1 = m_2", "m_1m_2 = 1", "m_1m_2 = -1", "m_1 + m_2 = 0"],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "Two lines are perpendicular if:",
          options: ["m_1 = m_2", "m_1 + m_2 = 0", "m_1m_2 = 0", "m_1m_2 = -1"],
          correctAnswer: 3
        },
        {
          id: 3,
          question: "Degree of a homogeneous equation must be:",
          options: ["integer", "positive integer", "rational", "real"],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "10x^2 + 3xy + 5y^2 = 0 is homogeneous of degree:",
          options: ["0", "1", "2", "more than 2"],
          correctAnswer: 2
        },
        {
          id: 5,
          question: "Homogeneous equation of 2nd degree represents:",
          options: ["one line", "two lines", "two lines through origin", "family of lines"],
          correctAnswer: 2
        },
        {
          id: 6,
          question: "ax^2 + 2hxy + by^2 = 0 represents real distinct lines if:",
          options: ["h^2 - ab < 0", "h^2 - ab = 0", "h^2 - ab > 0", "h = 0"],
          correctAnswer: 2
        },
        {
          id: 7,
          question: "Lines are coincident if:",
          options: ["h^2 - ab < 0", "h^2 - ab = 0", "h^2 - ab > 0", "h = 0"],
          correctAnswer: 1
        },
        {
          id: 8,
          question: "Lines are imaginary if:",
          options: ["h^2 - ab < 0", "h^2 - ab = 0", "h^2 - ab > 0", "h = 0"],
          correctAnswer: 0
        },
        {
          id: 9,
          question: "Lines represented by ax^2 + 2hxy + by^2 = 0 are perpendicular if:",
          options: ["a=b", "a=-b", "a<b", "a>b"],
          correctAnswer: 1
        },
        {
          id: 10,
          question: "Centroid of triangle with vertices A(-2,3), B(-4,1), C(3,5) is:",
          options: ["(-1,3)", "(-3,4)", "(1,3)", "none"],
          correctAnswer: 0
        },
        {
          id: 11,
          question: "10x^2 - 23xy - 5y^2 = 0 represents:",
          options: ["circle", "line", "pair of lines", "pair of circles"],
          correctAnswer: 2
        },
        {
          id: 12,
          question: "Slope of y-axis is:",
          options: ["0", "undefined", "1", "-1"],
          correctAnswer: 1
        },
        {
          id: 13,
          question: "Perpendicular distance of 3x + 4y + 10 = 0 from origin is:",
          options: ["0", "1", "2", "3"],
          correctAnswer: 3
        }
      ]
    },
    unit5: {
  basic: [
    { id: 1, question: "The solution of ax + by \\le c is a:", options: ["Closed half plane", "Open half plane", "Circle", "Parabola"], correctAnswer: 0 },
    { id: 2, question: "The function which is to be maximized or minimized is called the:", options: ["Bijective function", "Objective function", "Feasible function", "None"], correctAnswer: 1 },
    { id: 4, question: "x = 4 is a solution of:", options: ["x + 3 > 0", "x - 3 < 0", "x + 3 = 0", "x - 3 = 0"], correctAnswer: 0 },
    { id: 6, question: "x = 5 is a solution of the inequality:", options: ["2x - 3 > 0", "2x + 3 < 0", "x + 4 < 0", "x < 0"], correctAnswer: 0 },
    { id: 7, question: "The associated equation of the linear inequality ax + by < c is:", options: ["ax = c", "ax - by = 0", "ax + by = c", "None"], correctAnswer: 2 },
    { id: 10, question: "All points with x > 0, y > 0 lie in quadrant:", options: ["I", "II", "III", "IV"], correctAnswer: 0 },
    { id: 12, question: "ax + by < c is a linear inequality in ________ variables.", options: ["One", "Two", "Three", "Four"], correctAnswer: 1 },
    { id: 14, question: "2x + 3y < 0 is a/an:", options: ["Equation", "Inequality", "Identity", "Not identity"], correctAnswer: 1 },
    { id: 16, question: "The general form of the equation of a line is:", options: ["ax - by + c = 0", "ax + by - c = 0", "ax + by + c = 0", "ax - by - c = 0"], correctAnswer: 2 },
    { id: 17, question: "A vertical line divides a plane into:", options: ["Upper & lower half planes", "Upper & right half planes", "Left & right half planes", "Left & lower half planes"], correctAnswer: 2 },
    { id: 25, question: "The graph of y > 0 consists of the region y > 0 and:", options: ["x-axis", "y-axis", "xy-plane", "None"], correctAnswer: 0 }
  ],
  intermediate: [
    { id: 8, question: "(1, 3) is a solution of:", options: ["x + y > 0", "x + y < 2", "x + y = 2", "x - y = 0"], correctAnswer: 0 },
    { id: 9, question: "The solution set of the inequality ax + by \\le c is the:", options: ["Half solution", "XY plane", "Open plane", "Boundary of half plane"], correctAnswer: 3 },
    { id: 11, question: "Each point of a feasible region is called a:", options: ["Feasible solution set", "Feasible solution", "Corner point", "None"], correctAnswer: 1 },
    { id: 13, question: "A point of a solution region where two of its boundary lines intersect is called a:", options: ["Optimal solution", "Vertex", "Feasible solution", "None"], correctAnswer: 1 },
    { id: 15, question: "The graph of 3x + 2y > 3 is a/an:", options: ["Closed half plane", "Line only", "Open half plane", "Full plane"], correctAnswer: 2 },
    { id: 18, question: "The linear inequalities associated with an objective function are called:", options: ["Decision variables", "Problem constraints", "Feasible region", "None"], correctAnswer: 1 },
    { id: 20, question: "A feasible region is restricted to the ________ quadrant.", options: ["I", "II", "III", "IV"], correctAnswer: 0 },
    { id: 22, question: "A convex region may be:", options: ["Open", "Bounded", "Closed", "All are true"], correctAnswer: 3 },
    { id: 24, question: "The interval (-\\\\infty, 2/3) is the solution set of:", options: ["-\\\\infty < x < 3/2", "x > 2/3", "x < 2/3", "None"], correctAnswer: 2 },
    { id: 28, question: "A test point determines which side of the ________ the half plane lies.", options: ["x-axis", "y-axis", "Boundary line", "None"], correctAnswer: 2 },
    { id: 29, question: "The corresponding equation of x - 2y \\le 6 intersects the y-axis at:", options: ["(0, 3)", "(0, -3)", "(6, 0)", "(0, 6)"], correctAnswer: 1 },
    { id: 31, question: "The inequality ax + by \\le c, when a = 0, represents a ________ half plane.", options: ["Left or right", "Upper or Lower", "Open", "None"], correctAnswer: 1 },
    { id: 32, question: "The solution of the inequality x + 2y < 6 is:", options: ["(1, 1)", "(1, 3)", "(1, 4)", "(1, 5)"], correctAnswer: 0 }
  ],
  advanced: [
    { id: 3, question: "There are ________ many feasible solutions in the feasible region.", options: ["Infinite", "Finite", "Some", "None"], correctAnswer: 0 },
    { id: 5, question: "A point of a solution region where two boundary lines intersect is a corner point or:", options: ["Solution point", "Stationary", "Inflection", "Vertex"], correctAnswer: 3 },
    { id: 19, question: "In linear programming, the maximum and minimum values of an objective function occur at:", options: ["Origin", "Interior points", "Corner points of feasible region", "Any boundary point"], correctAnswer: 2 },
    { id: 21, question: "The feasible solution which maximizes or minimizes the objective function is called the:", options: ["Feasible region", "Optimal value", "Corner point", "Optimal solution"], correctAnswer: 3 },
    { id: 23, question: "(0, 0) is the test point for:", options: ["y > mx", "x + y > 1", "2x - y \\ge 0", "3x + 4y > 10"], correctAnswer: 3 },
    { id: 26, question: "Which one is NOT a corner point of x - 2y \\le 6, 2x + y \\ge 2, and x + 2y \\le 10?", options: ["(2, -2)", "(8, 1)", "(-2, 6)", "(0, -5)"], correctAnswer: 3 },
    { id: 27, question: "To find the optimal solution, we evaluate the objective function at:", options: ["Corner points", "Only origin", "Any point", "All points of feasible region"], correctAnswer: 0 },
    { id: 30, question: "The graph of -3x + 5y \\le 0 is:", options: ["On the origin side", "Left half plane", "Right half plane", "None"], correctAnswer: 0 },
    { id: 33, question: "The non-negative variables x \\ge 0, y \\ge 0 are called:", options: ["Parameters", "Constants", "Decision variables", "Vertices"], correctAnswer: 2 }
  ]
},
unit6: {
  basic: [
    { id: 1, question: "\\text{The equation of a circle whose center is } (g, f) \\text{ and radius is } r \\text{ is:}", options: ["\\sqrt{g^2-f^2-c}", "\\sqrt{g^2+f^2-c}", "\\sqrt{g^2+f^2+c}", "\\text{None}"], correctAnswer: 1 },
    { id: 5, question: "\\text{The parabola } y^2 = x \\text{ passes through the:}", options: ["1^{st} \\text{ quadrant}", "\\text{Origin}", "2^{nd} \\text{ quadrant}", "\\text{None}"], correctAnswer: 1 },
    { id: 6, question: "\\text{The eccentricity of a hyperbola is always:}", options: ["e = 1", "e < 1", "e > 1", "e \\ge 1"], correctAnswer: 2 },
    { id: 10, question: "\\text{If } e = 1, \\text{ the conic is a:}", options: ["\\text{Circle}", "\\text{Parabola}", "\\text{Ellipse}", "\\text{Hyperbola}"], correctAnswer: 1 },
    { id: 14, question: "\\text{Ellipse and hyperbola are called ________ conics.}", options: ["\\text{Central}", "\\text{Focal}", "\\text{Vertical}", "\\text{None}"], correctAnswer: 0 },
    { id: 15, question: "\\text{In an ellipse, the length of the major axis is:}", options: ["4a", "2a", "2b^2", "\\text{None}"], correctAnswer: 1 },
    { id: 17, question: "\\text{If } e < 1, \\text{ the conic is an:}", options: ["\\text{Circle}", "\\text{Parabola}", "\\text{Ellipse}", "\\text{Hyperbola}"], correctAnswer: 2 },
    { id: 25, question: "\\text{If the circle } x^2+y^2-3x-2y+c=0 \\text{ passes through the origin, then } c =", options: ["-1", "1", "0", "\\infty"], correctAnswer: 2 },
    { id: 26, question: "\\text{The length of the diameter of the circle } x^2 + y^2 = a^2 \\text{ is:}", options: ["a", "\\sqrt{a}", "\\text{zero}", "2a"], correctAnswer: 3 },
    { id: 27, question: "\\text{The center of the ellipse } x^2 + 4y^2 = 16 \\text{ is:}", options: ["(0,4)", "(0,0)", "(0,16)", "(4,16)"], correctAnswer: 1 },
    { id: 28, question: "\\text{If } r = 0, \\text{ then } x^2 + y^2 = r^2 \\text{ is called a ________ circle.}", options: ["\\text{Point}", "\\text{Zero}", "\\text{Small}", "\\text{Large}"], correctAnswer: 0 },
    { id: 30, question: "\\text{The distance between the vertex and focus of } y^2 = 4ax \\text{ is:}", options: ["\\text{zero}", "4a", "a", "4"], correctAnswer: 2 },
    { id: 31, question: "\\text{The midpoint of foci } F \\text{ and } F' \\text{ of an ellipse is called the:}", options: ["\\text{Vertex}", "\\text{Center}", "\\text{Focus}", "\\text{Directrix}"], correctAnswer: 1 },
    { id: 32, question: "\\text{Foci of an ellipse always lie on the:}", options: ["\\text{Major axis}", "\\text{Minor axis}", "\\text{Co-vertices}", "\\text{None}"], correctAnswer: 0 },
    { id: 35, question: "\\text{The two separate parts of a hyperbola are called:}", options: ["\\text{Branches}", "\\text{Parts}", "\\text{Curves}", "\\text{Directrix}"], correctAnswer: 0 },
    { id: 37, question: "\\text{A line segment whose endpoints lie on a circle is called a:}", options: ["\\text{Diameter}", "\\text{Radius}", "\\text{Chord}", "\\text{None}"], correctAnswer: 2 },
    { id: 41, question: "\\text{The parabola } y^2 = 4ax \\text{ opens towards the:}", options: ["\\text{Upward}", "\\text{Downward}", "\\text{Right side}", "\\text{Left side}"], correctAnswer: 2 },
    { id: 42, question: "\\text{The parabola } y^2 = -4ax \\text{ opens towards the:}", options: ["\\text{Upward}", "\\text{Downward}", "\\text{Right side}", "\\text{Left side}"], correctAnswer: 3 },
    { id: 43, question: "\\text{The parabola } x^2 = 4ay \\text{ opens towards the:}", options: ["\\text{Upward}", "\\text{Downward}", "\\text{Right side}", "\\text{Left side}"], correctAnswer: 0 },
    { id: 44, question: "\\text{The parabola } x^2 = -4ay \\text{ opens towards the:}", options: ["\\text{Upward}", "\\text{Downward}", "\\text{Right side}", "\\text{Left side}"], correctAnswer: 1 },
    { id: 46, question: "\\text{The focus of } x^2 = 4ay \\text{ is:}", options: ["(0, a)", "(a, 0)", "(0, -a)", "(-a, 0)"], correctAnswer: 0 },
    { id: 48, question: "\\text{The focus of } x^2 = -4ay \\text{ is:}", options: ["(0, a)", "(a, 0)", "(0, -a)", "(-a, 0)"], correctAnswer: 2 },
    { id: 50, question: "\\text{The directrix of } x^2 = 4ay \\text{ is:}", options: ["x = a", "x = -a", "y = -a", "y = a"], correctAnswer: 2 },
    { id: 52, question: "\\text{The directrix of } x^2 = -4ay \\text{ is:}", options: ["y = -a", "y = a", "x = a", "x = -a"], correctAnswer: 1 },
    { id: 58, question: "\\text{Vertices of the ellipse } \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1, a > b \\text{ are:}", options: ["(\\pm a, 0)", "(0, \\pm a)", "(\\pm b, 0)", "(0, \\pm b)"], correctAnswer: 0 },
    { id: 63, question: "\\text{If the eccentricity is less than 1, then the conic is:}", options: ["\\text{An ellipse}", "\\text{A circle}", "\\text{A parabola}", "\\text{A hyperbola}"], correctAnswer: 0 },
    { id: 80, question: "\\text{The term which is NOT part of a circle's equation is:}", options: ["x^2", "y^2", "ax + by", "xy"], correctAnswer: 3 },
    { id: 85, question: "\\text{Which of the following are functions:}", options: ["x^2 = 4ay", "x^2 = -4ay", "y^2 = 4ax", "\\text{Both } a \\text{ and } b"], correctAnswer: 3 },
    { id: 86, question: "\\text{Length of the minor axis of } \\frac{x^2}{b^2} + \\frac{y^2}{a^2} = 1, a > b \\text{ is:}", options: ["a", "b", "2a", "2b"], correctAnswer: 3 },
    { id: 88, question: "\\text{Directrix of the parabola } y^2 = 4ax \\text{ is:}", options: ["x = a", "x = -a", "y = a", "y = -a"], correctAnswer: 1 },
    { id: 91, question: "\\text{The center of the circle } x^2 + y^2 + 8x - 6y + 37 = 0 \\text{ is:}", options: ["(4,3)", "(-4,3)", "(-4,-3)", "(4,-3)"], correctAnswer: 1 },
    { id: 96, question: "\\text{The center of the circle } (x + 3)^2 + (y - 2)^2 = 16 \\text{ equals:}", options: ["(-3, 2)", "(3,-2)", "(3,2)", "(-3,-2)"], correctAnswer: 0 },
    { id: 98, question: "\\text{The radius of the circle } x^2 + y^2 + 2gx + 2fy + c = 0 \\text{ is:}", options: ["\\sqrt{g^2+f^2-c}", "\\sqrt{g^2+f^2+c}", "\\sqrt{g^2-f^2+c}", "\\sqrt{g^2+f^2-c}"], correctAnswer: 3 }
  ],
  intermediate: [
    { id: 2, question: "\\text{The directrix of the parabola } y^2 = 8x \\text{ is:}", options: ["x = -2", "x = 2", "y = -2", "y = 2"], correctAnswer: 0 },
    { id: 7, question: "\\text{The focus of the parabola } y^2 = -12x \\text{ is:}", options: ["(0,-3)", "(3,0)", "(-3,0)", "(0,0)"], correctAnswer: 2 },
    { id: 9, question: "\\text{Vertices of the hyperbola } \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\text{ are:}", options: ["(\\pm a, 0)", "(0, \\pm a)", "(0, \\pm b)", "(\\pm b, 0)"], correctAnswer: 0 },
    { id: 13, question: "\\text{For } \\frac{x^2}{16} + \\frac{y^2}{25} = 1, \\text{ the value of } c \\text{ is:}", options: ["16", "25", "1", "\\sqrt{41}"], correctAnswer: 3 },
    { id: 21, question: "\\text{Length of the latus rectum of } y^2 = 4ax \\text{ is:}", options: ["a", "2a", "4a", "\\text{None}"], correctAnswer: 2 },
    { id: 24, question: "y = \\pm \\frac{b}{a}x \\text{ are the ________ of the hyperbola.}", options: ["\\text{Asymptotes}", "\\text{Tangents}", "\\text{Center}", "\\text{None}"], correctAnswer: 0 },
    { id: 29, question: "\\text{The points } (\\pm a, 0) \\text{ for the hyperbola } \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\text{ are the:}", options: ["\\text{Focus}", "\\text{Vertices}", "\\text{Co-vertices}", "\\text{None}"], correctAnswer: 1 },
    { id: 33, question: "\\text{The length of the latus rectum of an ellipse is:}", options: ["2a", "a", "4a", "\\frac{2b^2}{a}"], correctAnswer: 3 },
    { id: 34, question: "\\text{The equation of the latus rectum of } y^2 = 4ax \\text{ is:}", options: ["y=a", "y=-a", "x=-a", "x=a"], correctAnswer: 3 },
    { id: 36, question: "\\text{The vertex of the parabola } (x - 2)^2 = 8(y + 1) \\text{ is:}", options: ["(2,-1)", "(-2, 1)", "(0,0)", "(1,2)"], correctAnswer: 0 },
    { id: 39, question: "\\text{The value of } a \\text{ for which } y^2 = 4ax \\text{ passes through } (2, 3) \\text{ is:}", options: ["8", "6", "5", "\\frac{9}{8}"], correctAnswer: 3 },
    { id: 40, question: "\\text{If } \\frac{x^2}{36} + \\frac{y^2}{49} = 1, \\text{ then the ends of the minor axis are:}", options: ["(\\pm 6, 0)", "(0, \\pm 6)", "(0, \\pm 7)", "(\\pm 7, 0)"], correctAnswer: 0 },
    { id: 45, question: "\\text{The focus of } y^2 = 4ax \\text{ is:}", options: ["(a, 0)", "(0, a)", "(-a, 0)", "(0, -a)"], correctAnswer: 0 },
    { id: 47, question: "\\text{The focus of } y^2 = -4ax \\text{ is:}", options: ["(a, 0)", "(0, a)", "(-a, 0)", "(0, -a)"], correctAnswer: 2 },
    { id: 49, question: "\\text{The directrix of } y^2 = 4ax \\text{ is:}", options: ["x = a", "x = -a", "y = a", "y = -a"], correctAnswer: 1 },
    { id: 51, question: "\\text{The directrix of } y^2 = -4ax \\text{ is:}", options: ["x = -a", "x = a", "y = a", "y = -a"], correctAnswer: 1 },
    { id: 57, question: "\\text{The center of the circle } x^2 + y^2 + 12x - 10y = 0 \\text{ is:}", options: ["(-6,-5)", "(6,-5)", "(6, 5)", "(-6,5)"], correctAnswer: 3 },
    { id: 62, question: "\\text{The equation of the focal chord of the parabola } y^2 = 3x \\text{ is:}", options: ["y=\\frac{3}{4}", "x=\\frac{7}{4}", "y=\\frac{7}{4}", "\\text{None}"], correctAnswer: 3 },
    { id: 67, question: "\\text{The point } (1,2) \\text{ relative to the circle } x^2+y^2=10 \\text{ is:}", options: ["\\text{Inside}", "\\text{Outside}", "\\text{On the circle}", "\\text{None}"], correctAnswer: 0 },
    { id: 70, question: "\\text{The length of the latus rectum of } \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\text{ is:}", options: ["\\frac{2a^2}{b}", "\\frac{2b^2}{a}", "\\frac{a^2}{b}", "\\frac{b^2}{a}"], correctAnswer: 1 },
    { id: 72, question: "\\text{Foci of the hyperbola } \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\text{ are:}", options: ["(\\pm c, 0)", "(0, \\pm c)", "(\\pm a, 0)", "(0, \\pm a)"], correctAnswer: 0 },
    { id: 77, question: "\\text{Length of the latus rectum of a hyperbola is:}", options: ["\\frac{2a^2}{b}", "\\frac{2a}{b^2}", "\\frac{2b}{a^2}", "\\frac{2b^2}{a}"], correctAnswer: 3 },
    { id: 79, question: "\\text{The equation of the asymptotes of } x^2 - y^2 = 9 \\text{ is:}", options: ["y = \\pm 3", "x = \\pm 3", "y = \\pm x", "y = 0"], correctAnswer: 2 },
    { id: 81, question: "\\text{Two circles touch internally if:}", options: ["C_1C_2 = r_1+r_2", "C_1C_2 = |r_2-r_1|", "C_1C_2 = 0", "\\text{None}"], correctAnswer: 1 },
    { id: 82, question: "\\text{Two circles touch externally if:}", options: ["C_1C_2 = r_1+r_2", "C_1C_2 = r_2-r_1", "C_1C_2 = 0", "\\text{None}"], correctAnswer: 0 },
    { id: 83, question: "\\text{The position of point } (5, 6) \\text{ w.r.t circle } 2x^2+2y^2+12x-8y+1=0 \\text{ is:}", options: ["\\text{Inside}", "\\text{Outside}", "\\text{On the circle}", "\\text{None}"], correctAnswer: 1 },
    { id: 87, question: "\\text{The center of the circle } x^2 + y^2 + 4x + 6y + 3 = 0 \\text{ is:}", options: ["(2, 3)", "(-2, 3)", "(-2, -3)", "(2, -3)"], correctAnswer: 2 },
    { id: 89, question: "\\text{The length of the latus rectum of } 9x^2 + 4y^2 = 36 \\text{ is:}", options: ["\\frac{3}{8}", "\\frac{8}{3}", "\\frac{3}{4}", "\\frac{4}{3}"], correctAnswer: 1 },
    { id: 90, question: "\\text{For a hyperbola, the relation between semi-axes is:}", options: ["c^2 = a^2-b^2", "c^2 = a^2+b^2", "b^2 = a^2+c^2", "a^2 = b^2+c^2"], correctAnswer: 1 },
    { id: 93, question: "\\text{The center of the circle } 4x^2-4x+6y-25 = 0 \\text{ is:}", options: ["(1, -\\frac{3}{2})", "(\\frac{3}{2}, 1)", "(\\frac{1}{2},-\\frac{3}{4})", "(1, 2)"], correctAnswer: 2 },
    { id: 94, question: "\\text{Foci of the ellipse } \\frac{x^2}{16} + \\frac{y^2}{12} = 1 \\text{ are:}", options: ["(\\pm 1,0)", "(0, \\pm 1)", "(\\pm 2,0)", "(0, \\pm 2)"], correctAnswer: 2 },
    { id: 95, question: "\\text{Foci of } \\frac{y^2}{a^2} + \\frac{x^2}{b^2} = 1 \\text{ (where } a^2-b^2 = c^2 \\text{) are:}", options: ["(\\pm c, 0)", "(0, \\pm c)", "(c, \\pm c)", "(\\pm c, c)"], correctAnswer: 1 },
    { id: 99, question: "\\text{The vertex of the parabola } (x - 1)^2 = 8(y + 2) \\text{ is:}", options: ["(1,-2)", "(0, 1)", "(-1,-2)", "(1, 2)"], correctAnswer: 0 }
  ],
  advanced: [
    { id: 3, question: "\\text{The equation of the tangent to the ellipse } \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\text{ is:}", options: ["y-y_1 = m(x-x_1)", "y = \\frac{c}{m}", "\\frac{xx_1}{a^2} + \\frac{yy_1}{b^2} = 1", "\\text{None}"], correctAnswer: 2 },
    { id: 4, question: "\\text{The transverse axis of the hyperbola } \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\text{ is the:}", options: ["\\text{x-axis}", "\\text{y-axis}", "\\text{z-axis}", "\\text{None}"], correctAnswer: 0 },
    { id: 8, question: "\\text{The tangents of an ellipse are } y = mx \\pm:", options: ["\\sqrt{m^2a^2 + b^2}", "\\sqrt{m^2a^2 - b^2}", "\\frac{a}{m}", "\\text{None}"], correctAnswer: 0 },
    { id: 11, question: "\\text{The parametric equations of } \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\text{ are:}", options: ["x=at^2, y=2at", "x=r\\cos\\theta, y=r\\sin\\theta", "x=a\\sec\\theta, y=b\\tan\\theta", "x=a\\cos\\theta, y=b\\sin\\theta"], correctAnswer: 2 },
    { id: 12, question: "\\text{The equation of the tangent of } \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\text{ is } y = mx \\pm:", options: ["\\sqrt{a^2m^2 + b^2}", "\\sqrt{a^2m^2 - b^2}", "\\frac{a}{m}", "\\frac{b}{m}"], correctAnswer: 0 },
    { id: 38, question: "\\text{The eccentricity of } \\frac{x^2}{16} + \\frac{y^2}{9} = 1 \\text{ is:}", options: ["\\frac{\\sqrt{7}}{4}", "\\frac{4}{5}", "-\\frac{\\sqrt{7}}{4}", "\\text{None}"], correctAnswer: 0 },
    { id: 55, question: "ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0 \\text{ forms a parabola if } h^2-ab =", options: ["< 0", "0", "> 0", "\\text{None}"], correctAnswer: 1 },
    { id: 56, question: "ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0 \\text{ forms a hyperbola if } h^2-ab =", options: ["< 0", "0", "> 0", "\\text{None}"], correctAnswer: 2 },
    { id: 59, question: "ax^2 + 2hxy + by^2 = 0 \\text{ represents two real distinct lines if:}", options: ["h^2 > ab", "h^2 = ab", "h^2 < ab", "\\text{None}"], correctAnswer: 0 },
    { id: 61, question: "\\text{The eccentricity of the ellipse } \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\text{ is:}", options: ["\\frac{\\sqrt{a^2-b^2}}{a}", "\\frac{\\sqrt{a^2+b^2}}{a}", "\\frac{\\sqrt{b^2-a^2}}{a}", "\\frac{\\sqrt{a^2-b^2}}{b}"], correctAnswer: 0 },
    { id: 64, question: "\\text{The eccentricity of a rectangular hyperbola is:}", options: ["e > 1", "\\sqrt{2}", "1", "0"], correctAnswer: 1 },
    { id: 68, question: "\\text{The slope of the tangent to } x^2+y^2=a^2 \\text{ at } (x_1,y_1) \\text{ is:}", options: ["\\frac{x_1}{y_1}", "\\frac{y_1}{x_1}", "-\\frac{x_1}{y_1}", "-\\frac{y_1}{x_1}"], correctAnswer: 2 },
    { id: 71, question: "\\text{The eccentricity of a hyperbola is:}", options: ["\\frac{\\sqrt{a^2+b^2}}{a}", "\\frac{\\sqrt{a^2-b^2}}{a}", "\\frac{c}{a}", "\\text{Both } a \\text{ and } c"], correctAnswer: 3 },
    { id: 74, question: "\\text{The equation of the tangent to } x^2+y^2=a^2 \\text{ at } (x_1,y_1) \\text{ is:}", options: ["xx_1-yy_1=a^2", "xx_1+yy_1=0", "xx_1-yy_1=0", "xx_1+yy_1=a^2"], correctAnswer: 3 },
    { id: 78, question: "\\text{Condition for the line } y=mx+c \\text{ to touch the hyperbola } \\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1 \\text{ is } c^2 =", options: ["a^2m^2+b^2", "a^2m^2-b^2", "b^2m^2-a^2", "\\text{None}"], correctAnswer: 1 },
    { id: 84, question: "\\text{The length of the tangent from } P(-5, 10) \\text{ to the circle } 5x^2+5y^2+14x+12y-10=0 \\text{ is:}", options: ["5", "15", "\\sqrt{133}", "133"], correctAnswer: 2 },
    { id: 92, question: "\\text{The slope of the tangent line to } y = f(x) \\text{ at } (x_1, y_1) \\text{ is:}", options: ["m", "\\frac{y_2-y_1}{x_2-x_1}", "f'(x_1)", "-\\frac{dx}{dy}"], correctAnswer: 2 },
    { id: 97, question: "\\text{The eccentricity of } \\frac{y^2}{4} - x^2 = 1 \\text{ equals:}", options: ["\\frac{2}{\\sqrt{5}}", "-\\frac{2}{\\sqrt{5}}", "\\frac{\\sqrt{5}}{2}", "-\\frac{\\sqrt{5}}{2}"], correctAnswer: 2 },
    // Repeat logic with variations to ensure exactly 33 per section
    { id: 101, question: "\\text{The directrix of } y^2 = 16x \\text{ is:}", options: ["x = 4", "x = -4", "y = 4", "y = -4"], correctAnswer: 1 },
    { id: 102, question: "\\text{The focus of } y^2 = 20x \\text{ is:}", options: ["(5, 0)", "(0, 5)", "(-5, 0)", "(0, -5)"], correctAnswer: 0 },
    { id: 103, question: "\\text{The center of } (x-1)^2 + (y+2)^2 = 9 \\text{ is:}", options: ["(-1, 2)", "(1, -2)", "(1, 2)", "(-1, -2)"], correctAnswer: 1 },
    { id: 104, question: "\\text{The radius of } x^2 + y^2 = 49 \\text{ is:}", options: ["49", "7", "\\sqrt{7}", "14"], correctAnswer: 1 },
    { id: 105, question: "\\text{The eccentricity of a circle is:}", options: ["1", "0", "\\infty", "0.5"], correctAnswer: 1 },
    { id: 106, question: "\\text{The conic } x^2/4 + y^2/9 = 1 \\text{ is an:}", options: ["\\text{Ellipse}", "\\text{Hyperbola}", "\\text{Parabola}", "\\text{Circle}"], correctAnswer: 0 },
    { id: 107, question: "\\text{The length of major axis for } x^2/25 + y^2/9 = 1 \\text{ is:}", options: ["5", "10", "3", "6"], correctAnswer: 1 },
    { id: 108, question: "\\text{The length of minor axis for } x^2/25 + y^2/9 = 1 \\text{ is:}", options: ["5", "10", "3", "6"], correctAnswer: 3 },
    { id: 109, question: "\\text{The asymptote of } x^2 - y^2 = 1 \\text{ is:}", options: ["y = x", "y = 2x", "y = 0.5x", "\\text{None}"], correctAnswer: 0 },
    { id: 110, question: "\\text{The distance between foci of ellipse is:}", options: ["a", "2a", "c", "2c"], correctAnswer: 3 },
    { id: 111, question: "\\text{If the discriminant } B^2-4AC < 0, \\text{ the conic is a:}", options: ["\\text{Parabola}", "\\text{Hyperbola}", "\\text{Ellipse}", "\\text{None}"], correctAnswer: 2 },
    { id: 112, question: "\\text{If the discriminant } B^2-4AC = 0, \\text{ the conic is a:}", options: ["\\text{Parabola}", "\\text{Hyperbola}", "\\text{Ellipse}", "\\text{None}"], correctAnswer: 0 },
    { id: 113, question: "\\text{If the discriminant } B^2-4AC > 0, \\text{ the conic is a:}", options: ["\\text{Parabola}", "\\text{Hyperbola}", "\\text{Ellipse}", "\\text{None}"], correctAnswer: 1 },
    { id: 114, question: "\\text{The vertex of } y^2 = 4ax \\text{ is:}", options: ["(a, 0)", "(0, 0)", "(0, a)", "(a, a)"], correctAnswer: 1 },
    { id: 115, question: "\\text{The focal parameter } p \\text{ for } y^2 = 4ax \\text{ is:}", options: ["a", "2a", "4a", "p"], correctAnswer: 0 }
  ]
},
unit7: {
  basic: [
    { id: 5, question: "\\text{The magnitude of a ______ cannot be changed.}", options: ["\\text{Null vector}", "\\text{Unit vector}", "\\text{Negative of a vector}", "\\text{None}"], correctAnswer: 1 },
    { id: 6, question: "\\text{The vector } [0, 0, 1] \\text{ lies along the:}", options: ["\\text{x-axis}", "\\text{y-axis}", "\\text{z-axis}", "\\text{All of these}"], correctAnswer: 2 },
    { id: 9, question: "\\text{The magnitude (norm) of a non-zero vector } \\mathbf{u} \\text{ is always:}", options: ["|\\mathbf{u}| = 0", "|\\mathbf{u}| < 0", "|\\mathbf{u}| > 0", "|\\mathbf{u}| \\ge 0"], correctAnswer: 2 },
    { id: 13, question: "\\text{A vector parallel and perpendicular to every vector is the:}", options: ["\\text{Position vector}", "\\text{Negative vector}", "\\text{Zero vector}", "\\text{Unit vector}"], correctAnswer: 2 },
    { id: 19, question: "\\text{The position vector of the point } (-1, 2, 3) \\text{ is:}", options: ["\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}", "\\mathbf{i} - 2\\mathbf{j} + 3\\mathbf{k}", "\\mathbf{i} - 2\\mathbf{j} - 3\\mathbf{k}", "-\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}"], correctAnswer: 3 },
    { id: 20, question: "\\text{Additive inverse of a position vector is a:}", options: ["\\text{Position vector}", "\\text{Unit vector}", "\\text{Null vector}", "\\text{None}"], correctAnswer: 3 },
    { id: 21, question: "\\text{The expression } \\mathbf{V}/|\\mathbf{V}| \\text{ (for a non-zero vector) equals:}", options: ["|\\mathbf{V}|", "\\mathbf{V}", "0", "\\hat{\\mathbf{V}}"], correctAnswer: 3 },
    { id: 31, question: "\\text{A vector making an angle } \\alpha \\text{ with the x-axis is represented as:}", options: ["\\cos \\alpha \\mathbf{i} + \\sin \\alpha \\mathbf{j}", "\\sin \\alpha \\mathbf{i} + \\cos \\alpha \\mathbf{j}", "\\cos \\alpha \\mathbf{i} - \\sin \\alpha \\mathbf{j}", "\\text{All of these}"], correctAnswer: 0 },
    { id: 43, question: "\\text{Which vector is parallel to every vector?}", options: ["\\text{Position vector}", "\\text{Null vector}", "\\text{Unit vector}", "\\text{None}"], correctAnswer: 1 },
    { id: 47, question: "\\text{The magnitude of the vector } \\mathbf{v} = 2\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k} \\text{ is:}", options: ["29", "\\sqrt{29}", "28", "\\sqrt{28}"], correctAnswer: 1 },
    { id: 49, question: "\\text{If two vectors } \\mathbf{u} \\text{ and } \\mathbf{v} \\text{ are orthogonal, then:}", options: ["\\mathbf{u} \\times \\mathbf{v} = 0", "\\mathbf{u} = -\\lambda \\mathbf{v}", "\\mathbf{u} \\cdot \\mathbf{v} = 0", "\\mathbf{v} = \\mathbf{u} + \\lambda \\mathbf{v}"], correctAnswer: 2 },
    { id: 50, question: "\\text{The direction cosines of a vector are:}", options: ["\\text{Real numbers}", "\\text{-ve real numbers}", "\\text{+ve real numbers}", "\\text{Non-zero real numbers}"], correctAnswer: 0 },
    { id: 52, question: "\\text{A vector having norm 2 and lying on a horizontal line is:}", options: ["2\\mathbf{i}", "-2\\mathbf{i}", "\\text{Both } a \\text{ and } b", "\\text{None}"], correctAnswer: 2 },
    { id: 56, question: "\\text{Let } \\vec{OA} = \\mathbf{a} \\text{ and } \\vec{OB} = \\mathbf{b}, \\text{ then vector } \\vec{AB} \\text{ is:}", options: ["\\mathbf{a} - \\mathbf{b}", "\\mathbf{a} + \\mathbf{b}", "\\mathbf{b} - \\mathbf{a}", "\\mathbf{b} + \\mathbf{a}"], correctAnswer: 2 },
    { id: 57, question: "\\text{Work done (W) is defined by the formula:}", options: ["\\mathbf{F} \\times \\mathbf{F}", "\\mathbf{F} \\times \\mathbf{d}", "\\mathbf{F} \\cdot \\mathbf{d}", "\\mathbf{d} \\cdot \\mathbf{F}"], correctAnswer: 2 },
    { id: 62, question: "\\text{A vector whose initial point is at the origin and terminal point is P is called the:}", options: ["\\text{Displacement}", "\\text{Magnitude}", "\\text{Position vector}", "\\text{None}"], correctAnswer: 2 },
    { id: 67, question: "\\text{Commutative law holds true in:}", options: ["\\text{Vector product}", "\\text{Cross product}", "\\text{Scalar (Dot) product}", "\\text{None}"], correctAnswer: 2 },
    { id: 73, question: "\\text{In vector } \\mathbf{u} = [4, 5], \\text{ the numbers 4 and 5 are called:}", options: ["\\text{Coordinates}", "\\text{Vectors}", "\\text{Components}", "\\text{Ordinates}"], correctAnswer: 2 },
    { id: 77, question: "\\text{The magnitude } |\\cos \\alpha \\mathbf{i} + \\sin \\alpha \\mathbf{j} + 0\\mathbf{k}| \\text{ is:}", options: ["0", "1", "-1", "2"], correctAnswer: 1 },
    { id: 78, question: "\\text{Magnitude of vector } \\mathbf{v} = -\\mathbf{i} + \\mathbf{j} \\text{ is:}", options: ["\\sqrt{1}", "\\sqrt{2}", "\\sqrt{3}", "\\sqrt{4}"], correctAnswer: 1 },
    { id: 79, question: "\\text{The value of } \\mathbf{k} \\cdot (\\mathbf{i} \\times \\mathbf{j}) \\text{ is:}", options: ["0", "1", "2", "-1"], correctAnswer: 1 },
    { id: 85, question: "\\text{The cross product } \\mathbf{i} \\times \\mathbf{i} \\text{ equals:}", options: ["1", "2", "0", "-1"], correctAnswer: 2 }
  ],
  intermediate: [
    { id: 2, question: "\\text{The projection of vector } \\mathbf{a} = u\\mathbf{i} + v\\mathbf{j} + w\\mathbf{k} \\text{ along the j-axis is:}", options: ["u", "v", "w", "\\text{None}"], correctAnswer: 1 },
    { id: 3, question: "\\text{The expression } ab \\sin \\theta \\text{ is equal to:}", options: ["|\\mathbf{a} \\cdot \\mathbf{b}|", "\\mathbf{a} \\cdot \\mathbf{b}", "|\\mathbf{a} \\times \\mathbf{b}|", "(\\mathbf{a} \\times \\mathbf{b})/|\\mathbf{a} \\times \\mathbf{b}|"], correctAnswer: 2 },
    { id: 7, question: "\\text{The volume of a parallelepiped with edges } (\\mathbf{i}-4\\mathbf{j}+\\mathbf{k}), (\\mathbf{i}-\\mathbf{j}-2\\mathbf{k}), \\text{ and } (2\\mathbf{i}-3\\mathbf{j}+\\mathbf{k}) \\text{ is:}", options: ["10", "0", "14", "17"], correctAnswer: 2 },
    { id: 10, question: "\\text{If A, B, C, D are vertices of a parallelepiped, its volume is:}", options: ["[\\vec{AB} \\vec{BC} \\vec{CD}]", "[\\vec{AB} \\vec{AC} \\vec{BD}]", "[\\vec{AB} \\vec{AC} \\vec{AD}]", "[\\vec{BC} \\vec{BD} \\vec{AD}]"], correctAnswer: 2 },
    { id: 12, question: "\\text{The moment of force } \\mathbf{F} \\text{ about point A, applied at point B, is:}", options: ["\\mathbf{F} \\cdot \\vec{AB}", "\\vec{AB} \\times \\mathbf{F}", "\\vec{BA} \\cdot \\mathbf{F}", "\\mathbf{F} \\times \\vec{BA}"], correctAnswer: 1 },
    { id: 16, question: "\\text{The value of } 2\\mathbf{i} \\cdot (5\\mathbf{j} \\times 3\\mathbf{k}) \\text{ is:}", options: ["1", "30", "0", "12"], correctAnswer: 1 },
    { id: 17, question: "\\text{Vectors } \\mathbf{u} = 2\\mathbf{i}-4\\mathbf{j}+5\\mathbf{k} \\text{ and } \\mathbf{v} = 4\\mathbf{i}-3\\mathbf{j}-4\\mathbf{k} \\text{ are:}", options: ["\\text{Parallel}", "\\text{Perpendicular}", "\\text{Neither parallel nor perp}", "\\text{None}"], correctAnswer: 1 },
    { id: 23, question: "\\text{The angle between the vector } \\sqrt{3}\\mathbf{i} + \\mathbf{j} \\text{ and the x-axis is:}", options: ["30^\\circ", "60^\\circ", "45^\\circ", "90^\\circ"], correctAnswer: 0 },
    { id: 25, question: "\\text{If } \\mathbf{u}, \\mathbf{v}, \\text{ and } \\mathbf{w} \\text{ are coplanar, then } \\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w}) \\text{ is:}", options: ["0", "1", "-1", "\\text{None}"], correctAnswer: 0 },
    { id: 27, question: "\\text{If } \\mathbf{u} \\cdot \\mathbf{i} = 2 \\text{ and } \\mathbf{u} \\cdot \\mathbf{j} = 3, \\text{ then the vector } \\mathbf{u} \\text{ is:}", options: ["3\\mathbf{i} - 2\\mathbf{j}", "2\\mathbf{i} - 3\\mathbf{j}", "3\\mathbf{i} + 2\\mathbf{j}", "2\\mathbf{i} + 3\\mathbf{j}"], correctAnswer: 3 },
    { id: 35, question: "\\text{The projection of vector } \\mathbf{a} \\text{ along vector } \\mathbf{b} \\text{ is given by:}", options: ["(\\mathbf{a} \\cdot \\mathbf{b}) / |\\mathbf{b}|", "\\mathbf{a} \\cdot \\mathbf{b}", "(\\mathbf{a} \\cdot \\mathbf{b}) / |\\mathbf{a}|", "\\mathbf{a} \\times \\mathbf{b}"], correctAnswer: 0 },
    { id: 36, question: "\\text{If } \\mathbf{u} \\text{ and } \\mathbf{v} \\text{ are adjacent vectors of a parallelogram, its area is:}", options: ["\\mathbf{u} \\cdot \\mathbf{v}", "|\\mathbf{u} \\cdot \\mathbf{v}|", "\\mathbf{u} \\times \\mathbf{v}", "|\\mathbf{u} \\times \\mathbf{v}|"], correctAnswer: 3 },
    { id: 38, question: "\\text{The dot product of two vectors is minimum when } \\theta \\text{ is:}", options: ["0^\\circ", "\\pi", "\\pi/2", "\\pi/4"], correctAnswer: 1 },
    { id: 59, question: "\\text{If } |\\mathbf{a}|=16, |\\mathbf{b}|=2, \\text{ and the angle is } 60^\\circ, \\text{ their scalar product is:}", options: ["6", "48", "16", "24"], correctAnswer: 2 },
    { id: 60, question: "\\text{Work done by force } 2\\mathbf{i}-\\mathbf{j}-\\mathbf{k} \\text{ in displacement } 3\\mathbf{i}+2\\mathbf{j}-5\\mathbf{k} \\text{ is:}", options: ["3", "5", "7", "9"], correctAnswer: 3 },
    { id: 63, question: "\\text{If } P=(2,3) \\text{ and } Q=(6,-2), \\text{ then the vector } \\vec{PQ} \\text{ is:}", options: ["4\\mathbf{i} + 5\\mathbf{j}", "-4\\mathbf{i} + 5\\mathbf{j}", "4\\mathbf{i} - 5\\mathbf{j}", "5\\mathbf{i} - 4\\mathbf{j}"], correctAnswer: 2 }
  ],
  advanced: [
    { id: 1, question: "\\text{If } \\mathbf{u} = 2\\mathbf{i} + a\\mathbf{j} + 5\\mathbf{k} \\text{ and } \\mathbf{v} = 3\\mathbf{i} + \\mathbf{j} + a\\mathbf{k} \\text{ are perpendicular, then } a =", options: ["0", "3", "-1", "-1/2"], correctAnswer: 2 },
    { id: 4, question: "\\text{If } 4\\mathbf{i} + 0\\mathbf{j} - 3\\mathbf{k} \\text{ is a vector, then the direction cosine } \\cos \\gamma \\text{ is:}", options: ["4/5", "1/5", "-3/5", "2/5"], correctAnswer: 2 },
    { id: 11, question: "(\\mathbf{i} - \\mathbf{j}) \\cdot (\\mathbf{j} - \\mathbf{k}) \\times (\\mathbf{k} - \\mathbf{i}) \\text{ equals:}", options: ["1", "0", "-1", "2"], correctAnswer: 1 },
    { id: 30, question: "\\text{The vector triple product } \\mathbf{u} \\times (\\mathbf{v} \\times \\mathbf{w}) \\text{ is equivalent to:}", options: ["(\\mathbf{u} \\cdot \\mathbf{w})\\mathbf{v} - (\\mathbf{u} \\cdot \\mathbf{v})\\mathbf{w}", "\\mathbf{v}(\\mathbf{w} \\cdot \\mathbf{u})", "\\mathbf{w}(\\mathbf{u} \\cdot \\mathbf{v})", "\\text{None}"], correctAnswer: 0 },
    { id: 34, question: "\\text{A unit vector perpendicular to both vectors } \\mathbf{a} \\text{ and } \\mathbf{b} \\text{ is:}", options: ["(\\mathbf{a} \\cdot \\mathbf{b}) / |\\mathbf{a}||\\mathbf{b}|", "(\\mathbf{a} \\times \\mathbf{b}) / |\\mathbf{a} \\times \\mathbf{b}|", "(\\mathbf{a} \\times \\mathbf{b}) / |\\mathbf{a}|", "\\mathbf{a} \\times \\mathbf{b}"], correctAnswer: 1 },
    { id: 41, question: "\\text{If } |\\mathbf{a} \\cdot \\mathbf{b}| = 6 \\text{ and } |\\mathbf{a} \\times \\mathbf{b}| = 6\\sqrt{3}, \\text{ the angle between them is:}", options: ["90^\\circ", "60^\\circ", "30^\\circ", "45^\\circ"], correctAnswer: 1 },
    { id: 44, question: "\\text{If } \\alpha, \\beta, \\gamma \\text{ are directional angles, then } \\sin^2 \\alpha + \\sin^2 \\beta + \\sin^2 \\gamma =", options: ["0", "1", "2", "-2"], correctAnswer: 2 },
    { id: 46, question: "\\text{If } \\mathbf{u}, \\mathbf{v}, \\text{ and } \\mathbf{w} \\text{ are edges of a tetrahedron, its volume is:}", options: ["1/4 [\\mathbf{u}\\mathbf{v}\\mathbf{w}]", "1/6 [\\mathbf{u}\\mathbf{v}\\mathbf{w}]", "[\\mathbf{u}\\mathbf{v}\\mathbf{w}]", "1/3 [\\mathbf{u}\\mathbf{v}\\mathbf{w}]"], correctAnswer: 1 },
    { id: 54, question: "\\text{If } \\mathbf{a} = 4\\mathbf{i} + 3\\mathbf{j} + \\mathbf{k} \\text{ and } \\mathbf{b} = 2\\mathbf{i} - \\mathbf{j} - 2\\mathbf{k}, \\text{ a vector perpendicular to both is:}", options: ["7\\mathbf{i} - 6\\mathbf{j} - 10\\mathbf{k}", "1/\\sqrt{185} (7\\mathbf{i} - 6\\mathbf{j} - 10\\mathbf{k})", "1/\\sqrt{185} (7\\mathbf{i} + 6\\mathbf{j} + 10\\mathbf{k})", "\\text{None}"], correctAnswer: 1 },
    { id: 70, question: "\\text{Geometrically, } \\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c}) \\text{ represents:}", options: ["\\text{Area of triangle}", "\\text{Volume of parallelepiped}", "\\text{Volume of tetrahedron}", "\\text{Area of parallelogram}"], correctAnswer: 1 },
    { id: 75, question: "\\text{If } \\mathbf{a} = [2, 3, 1] \\text{ and } \\mathbf{b} = [1, 0, 2], \\text{ then } \\mathbf{a} \\times \\mathbf{b} \\text{ is:}", options: ["6\\mathbf{i} - 3\\mathbf{j} - 3\\mathbf{k}", "6\\mathbf{i} + 3\\mathbf{j} + 3\\mathbf{k}", "-6\\mathbf{i} + 3\\mathbf{j} + 3\\mathbf{k}", "\\text{Null vector}"], correctAnswer: 0 }
  ]
}
  }
};

export default questionsData;