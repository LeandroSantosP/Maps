module.exports = function (plop) {
  // controller generator
  plop.setGenerator("component", {
    description: "application component logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "componet name please"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templetes/index.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/jest.tsx",
        templateFile: "templetes/jest.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.ts",
        templateFile: "templetes/styles.tsx.hbs"
      }
    ]
  });
};
