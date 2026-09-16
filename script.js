const stages = [
  {
    number: "01",
    short: "Foundations",
    title: "Foundations",
    summary: "Number sense, arithmetic, fractions, decimals, percentages, measurement, and practical problem solving.",
    tags: ["Number sense", "Arithmetic", "Fractions", "Everyday math"],
    groups: [
      ["Number sense", ["Natural, whole, integer, rational, irrational, and real numbers", "Positive and negative numbers", "Place value and decimal place value", "Number lines, opposites, and absolute value", "Comparing, ordering, estimating, and rounding"]],
      ["Core operations", ["Addition, subtraction, multiplication, and division", "Mental math and multi-digit calculations", "Long multiplication and long division", "Operations with zero and negative numbers", "Order of operations and nested expressions"]],
      ["Factors & multiples", ["Factors and multiples", "Prime and composite numbers", "Divisibility rules", "Prime factorization", "Greatest common factor and least common multiple"]],
      ["Fractions", ["Fraction meaning, numerator, and denominator", "Proper, improper, and mixed numbers", "Equivalent and simplified fractions", "Comparing and ordering fractions", "Adding, subtracting, multiplying, and dividing fractions", "Complex fractions"]],
      ["Decimals & percentages", ["Decimal notation, comparison, rounding, and operations", "Terminating and repeating decimals", "Fraction–decimal–percent conversions", "Percent of a quantity and finding the whole", "Percent increase, decrease, discount, markup, tax, and tips"]],
      ["Measurement & problems", ["Length, mass, capacity, time, and temperature", "Metric units and unit conversions", "Perimeter and area basics", "Money, time, and measurement problems", "One-step and multi-step word problems"]]
    ],
    goal: "Work confidently with numbers, choose suitable operations, and solve practical arithmetic problems without hidden foundational gaps."
  },
  {
    number: "02",
    short: "Math Bridge",
    title: "Math Bridge",
    summary: "The transition from calculating with numbers to reasoning with variables, relationships, and symbolic rules.",
    tags: ["Pre-algebra", "Ratios", "Expressions", "Exponents"],
    groups: [
      ["Ratios, rates & proportions", ["Ratio meaning and equivalent ratios", "Part-to-part and part-to-whole ratios", "Rates, unit rates, speed, and unit price", "Solving proportions and cross multiplication", "Direct and inverse proportion", "Scale drawings, maps, and similarity applications"]],
      ["Variables & expressions", ["Variables, unknowns, changing quantities, and constants", "Terms, coefficients, factors, and like terms", "Writing expressions from words", "Evaluating and simplifying expressions", "Combining like terms with integer, decimal, and fractional coefficients"]],
      ["Properties & distribution", ["Commutative and associative properties", "Distributive property", "Identity, inverse, and zero properties", "Expanding expressions", "Factoring out a common factor", "Working with negative signs and multiple terms"]],
      ["Exponents & roots", ["Bases, exponents, powers, squares, and cubes", "Zero and negative exponents", "Product, quotient, and power rules", "Power of a product and quotient", "Square roots, cube roots, perfect powers, and root estimation"]],
      ["Scientific notation", ["Converting between standard and scientific notation", "Comparing numbers in scientific notation", "Multiplying and dividing in scientific notation"]],
      ["Early algebra & graphs", ["Equality and one-step equations", "Checking solutions", "Basic inequalities and number-line graphs", "Numerical and growing patterns", "Input-output tables", "Coordinate axes, origin, quadrants, and plotting points"]]
    ],
    goal: "Translate between words, numbers, symbols, tables, and graphs—and reason about relationships rather than only compute."
  },
  {
    number: "03",
    short: "Algebra I",
    title: "Algebra I",
    summary: "Linear relationships, equations, inequalities, graphs, functions, systems, and mathematical modeling.",
    tags: ["Equations", "Lines", "Functions", "Systems"],
    groups: [
      ["Equations & inequalities", ["One-step, two-step, and multi-step equations", "Variables on both sides and parentheses", "Fraction and decimal coefficients", "Literal equations", "One-step and multi-step inequalities", "Compound inequalities, interval notation, and inequality graphs"]],
      ["Absolute value", ["Absolute-value expressions", "Absolute-value equations", "Absolute-value inequalities", "Distance interpretation"]],
      ["Coordinate geometry", ["Ordered pairs, distance, and midpoint", "Slope as rise over run", "Positive, negative, zero, and undefined slope", "Finding slope from points and graphs"]],
      ["Lines & linear functions", ["Slope-intercept, point-slope, and standard forms", "Intercepts and graphing lines", "Writing equations of lines", "Parallel and perpendicular lines", "Rate of change, initial value, direct variation, and linear models"]],
      ["Relations, functions & systems", ["Relations, inputs, outputs, domain, and range", "Function notation and vertical-line test", "Functions in tables, graphs, and equations", "Systems by graphing, substitution, and elimination", "One, none, or infinitely many solutions", "Systems of inequalities and feasible regions"]],
      ["Polynomials & applications", ["Integer exponent laws and scientific notation", "Monomials, binomials, trinomials, degree, and leading coefficient", "Adding, subtracting, and multiplying polynomials", "GCF factoring and difference of squares introduction", "Arithmetic sequences and explicit or recursive rules", "Age, distance, money, mixture, work, number, and geometry problems"]]
    ],
    goal: "Solve, graph, and model linear relationships confidently, then explain what each representation means in context."
  },
  {
    number: "04",
    short: "Geometry + Algebra II",
    title: "Geometry & Algebra II",
    summary: "Spatial reasoning and proof alongside quadratics, polynomial algebra, radicals, rational expressions, and complex numbers.",
    tags: ["Geometry", "Quadratics", "Polynomials", "Radicals"],
    groups: [
      ["Geometry language", ["Points, lines, planes, segments, and rays", "Angle types and relationships", "Complementary, supplementary, and vertical angles", "Parallel lines and transversals", "Introductory geometric proof"]],
      ["Triangles & polygons", ["Triangle classification and angle relationships", "Congruence: SSS, SAS, ASA, AAS, and HL", "Similarity, AA similarity, and scale factors", "Pythagorean theorem", "30-60-90 and 45-45-90 triangles", "Quadrilaterals, polygons, and interior or exterior angles"]],
      ["Measurement & circles", ["Perimeter, area, and composite area", "Radius, diameter, circumference, and circle area", "Arcs, chords, secants, and tangents", "Central and inscribed angles", "Three-dimensional figures, surface area, and volume"]],
      ["Coordinate geometry", ["Coordinate proofs and relationships", "Translations, rotations, reflections, and dilations", "Symmetry and transformations"]],
      ["Polynomial algebra", ["Advanced polynomial operations", "Polynomial and synthetic division", "Factor and remainder theorems", "GCF, grouping, difference of squares, and trinomial factoring", "Perfect-square trinomials and sum or difference of cubes"]],
      ["Quadratics", ["Solving by factoring and square roots", "Completing the square and quadratic formula", "Discriminant", "Parabolas, vertex, axis of symmetry, and intercepts", "Maximum and minimum applications"]],
      ["Radicals & complex numbers", ["Imaginary unit and complex-number operations", "Simplifying radicals", "Rational exponents", "Radical equations"]],
      ["Rational expressions & variation", ["Simplifying and operating with rational expressions", "Rational equations", "Direct, inverse, and joint variation"]]
    ],
    goal: "Use formal geometric reasoning and handle quadratic, polynomial, radical, rational, and complex-number relationships accurately."
  },
  {
    number: "05",
    short: "Advanced Algebra + Trig",
    title: "Advanced Algebra & Trigonometry",
    summary: "Nonlinear function behavior, exponential and logarithmic models, and trigonometric relationships.",
    tags: ["Nonlinear functions", "Logs", "Unit circle", "Trig identities"],
    groups: [
      ["Advanced functions", ["Polynomial functions, zeros, multiplicity, and end behavior", "Graphing polynomial functions", "Rational functions, domain, holes, and asymptotes", "Radical, absolute-value, and piecewise functions", "Function composition and inverse functions"]],
      ["Exponential models", ["Exponential growth and decay", "Compound interest", "Continuous growth", "Modeling with exponential functions"]],
      ["Logarithms", ["Common and natural logarithms", "Product, quotient, and power rules", "Solving exponential equations", "Solving logarithmic equations"]],
      ["Angles & right-triangle trig", ["Degrees, radians, and conversions", "Coterminal and reference angles", "Sine, cosine, tangent, secant, cosecant, and cotangent", "Inverse trigonometric functions", "Solving right triangles", "Angles of elevation and depression"]],
      ["Unit circle & graphs", ["Unit-circle values and signs by quadrant", "Exact trigonometric values", "Sine, cosine, and tangent graphs", "Amplitude, period, phase shift, and vertical shift"]],
      ["Identities & equations", ["Reciprocal, quotient, and Pythagorean identities", "Even, odd, and cofunction identities", "Sum, difference, double-angle, and half-angle identities", "Trigonometric equations"]],
      ["Oblique triangles", ["Law of Sines", "Law of Cosines", "Area of oblique triangles"]]
    ],
    goal: "Analyze nonlinear functions and use trigonometric relationships to solve unfamiliar algebraic, geometric, and real-world problems."
  },
  {
    number: "06",
    short: "Precalculus",
    title: "Precalculus",
    summary: "A unified study of functions, sequences, conics, vectors, matrices, polar systems, and early limit thinking.",
    tags: ["Function mastery", "Sequences", "Vectors", "Limits"],
    groups: [
      ["Function analysis", ["Domain, range, intercepts, and symmetry", "Increasing and decreasing intervals", "Maximum, minimum, and end behavior", "Polynomial, rational, exponential, logarithmic, and trigonometric functions"]],
      ["Transformations & operations", ["Horizontal and vertical shifts", "Stretching, compression, and reflections", "Function addition, subtraction, multiplication, and division", "Composition and inverse functions", "Trigonometric modeling"]],
      ["Sequences & series", ["Arithmetic, geometric, recursive, and explicit sequences", "Finite and infinite geometric series", "Sigma notation", "Binomial theorem and Pascal's triangle"]],
      ["Conics & coordinate systems", ["Circles, parabolas, ellipses, and hyperbolas", "Parametric equations", "Polar coordinates and polar equations"]],
      ["Vectors & matrices", ["Vector magnitude, direction, and components", "Vector addition, scalar multiplication, and dot product", "Matrix notation and operations", "Matrix multiplication, determinants, and inverses", "Solving systems with matrices"]],
      ["Complex numbers & limits", ["Complex plane and polar form", "De Moivre's theorem", "Intuitive, one-sided, algebraic, and graphical limits", "Infinite limits and limits at infinity", "Introduction to continuity"]]
    ],
    goal: "Analyze the behavior of many function families and connect algebraic, graphical, numerical, and geometric representations before calculus."
  },
  {
    number: "07",
    short: "Calculus",
    title: "Calculus",
    summary: "Limits, derivatives, integrals, series, multivariable functions, and vector calculus.",
    tags: ["Change", "Accumulation", "Series", "Multivariable"],
    groups: [
      ["Calculus I: limits", ["One-sided, infinite, and limits at infinity", "Continuity and Intermediate Value Theorem", "Derivative definition and first principles"]],
      ["Calculus I: derivatives", ["Power, constant, sum, product, quotient, and chain rules", "Trigonometric, exponential, and logarithmic derivatives", "Implicit differentiation and higher derivatives", "Related rates, linear approximation, and differentials"]],
      ["Calculus I: applications", ["Critical points and monotonicity", "Concavity and inflection points", "Optimization and curve sketching", "Mean Value Theorem and L'Hôpital's Rule"]],
      ["Calculus II: integration", ["Antiderivatives, indefinite and definite integrals", "Riemann sums and Fundamental Theorem of Calculus", "Substitution and integration by parts", "Trigonometric integrals and substitution", "Partial fractions and improper integrals"]],
      ["Calculus II: applications & series", ["Area, volume, arc length, surface area, and work", "Introductory and separable differential equations", "Infinite series and convergence tests", "Power, Taylor, and Maclaurin series"]],
      ["Calculus III: space", ["Three-dimensional coordinates, vectors, dot and cross products", "Lines, planes, quadric surfaces, and motion in space", "Functions of several variables, multivariable limits, and continuity"]],
      ["Calculus III: multivariable", ["Partial and directional derivatives", "Gradient and tangent planes", "Multivariable optimization and Lagrange multipliers", "Double and triple integrals", "Polar, cylindrical, and spherical coordinates"]],
      ["Vector calculus", ["Vector fields and line integrals", "Conservative fields", "Green's theorem", "Surface integrals", "Divergence theorem and Stokes' theorem"]]
    ],
    goal: "Reason about continuous change and accumulation in one and several variables, then use those ideas to model and solve complex systems."
  },
  {
    number: "08",
    short: "Math Mastery",
    title: "Mathematical Mastery",
    summary: "University core mathematics, rigorous proof, abstract structures, modeling, and advanced specialization.",
    tags: ["Proof", "Linear algebra", "Probability", "Higher math"],
    groups: [
      ["Linear algebra", ["Systems, matrices, elimination, and determinants", "Vector spaces, subspaces, span, basis, and dimension", "Linear independence and transformations", "Kernel, image, eigenvalues, eigenvectors, and diagonalization", "Inner products, orthogonality, Gram-Schmidt, and least squares"]],
      ["Probability & statistics", ["Counting, events, conditional probability, independence, and Bayes' theorem", "Random variables, distributions, expected value, and variance", "Binomial, Poisson, and normal distributions", "Sampling, confidence intervals, hypothesis tests, and p-values", "Correlation, regression, ANOVA, Law of Large Numbers, and Central Limit Theorem"]],
      ["Discrete mathematics", ["Propositional and predicate logic", "Sets, relations, and functions", "Proof, induction, recursion, and recurrence relations", "Combinatorics and pigeonhole principle", "Graph theory, trees, networks, Boolean algebra, and algorithms"]],
      ["Differential equations", ["First-order separable, linear, and exact equations", "Second-order homogeneous and nonhomogeneous equations", "Systems of differential equations", "Laplace transforms and series solutions", "Numerical methods"]],
      ["Proof & number theory", ["Statements, quantifiers, implication, and equivalence", "Direct proof, contradiction, contrapositive, and induction", "Existence, uniqueness, and counterexamples", "Divisibility, primes, GCD, and Euclidean algorithm", "Modular arithmetic, congruences, Diophantine equations, and classical theorems"]],
      ["Analysis & abstract algebra", ["Rigorous limits, convergence, continuity, differentiation, and integration", "Cauchy sequences, uniform continuity, infinite series, and sequences of functions", "Groups, subgroups, cyclic and permutation groups", "Cosets, homomorphisms, isomorphisms, rings, domains, fields, and polynomial rings"]],
      ["Advanced directions", ["Complex and numerical analysis", "Optimization and operations research", "Partial differential equations", "Topology, differential geometry, and functional analysis", "Measure theory, stochastic processes, and dynamical systems"]],
      ["Applied specializations", ["Mathematical modeling", "Game theory and cryptography", "Mathematical finance", "Advanced graph theory and combinatorics", "Data, science, engineering, and computational applications"]]
    ],
    goal: "Read and write rigorous mathematics, connect multiple branches, learn unfamiliar topics independently, and specialize in advanced theoretical or applied work."
  }
];

const jump = document.querySelector("#stageJump");
const list = document.querySelector("#roadmapList");

function renderGroup([heading, topics]) {
  return `<section class="topic-group"><h4>${heading}</h4><ul>${topics.map(topic => `<li>${topic}</li>`).join("")}</ul></section>`;
}

stages.forEach((stage, index) => {
  const jumpButton = document.createElement("button");
  jumpButton.className = "stage-jump";
  jumpButton.type = "button";
  jumpButton.dataset.target = `stage-${stage.number}`;
  jumpButton.innerHTML = `<b>${stage.number}</b><span>${stage.short}</span>`;
  jump.appendChild(jumpButton);

  const card = document.createElement("details");
  card.className = "stage-card";
  card.id = `stage-${stage.number}`;
  if (index === 0) card.open = true;
  card.innerHTML = `
    <summary class="stage-summary">
      <span class="stage-number">${stage.number}</span>
      <span class="stage-title-row"><h3>${stage.title}</h3><p>${stage.summary}</p></span>
      <span class="stage-toggle" aria-hidden="true">+</span>
    </summary>
    <div class="stage-body">
      <div class="stage-meta">${stage.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <div class="topic-groups">${stage.groups.map(renderGroup).join("")}</div>
      <div class="mastery-goal"><b>Stage mastery</b><p>${stage.goal}</p></div>
    </div>`;
  list.appendChild(card);
});

jump.addEventListener("click", event => {
  const button = event.target.closest(".stage-jump");
  if (!button) return;
  const target = document.getElementById(button.dataset.target);
  target.open = true;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll(".stage-jump").forEach(button => {
      button.classList.toggle("active", button.dataset.target === entry.target.id);
    });
  });
}, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });

document.querySelectorAll(".stage-card").forEach(card => observer.observe(card));

const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector("#mobileNav");
menuButton.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
mobileNav.addEventListener("click", event => {
  if (event.target.matches("a")) {
    mobileNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

const diagnosticLink = document.querySelector("#diagnosticLink");
diagnosticLink.addEventListener("click", event => {
  if (diagnosticLink.getAttribute("href") === "#") {
    event.preventDefault();
    const note = document.querySelector("#linkNote");
    note.textContent = "The diagnostic link will be added here soon.";
    note.setAttribute("role", "status");
  }
});
