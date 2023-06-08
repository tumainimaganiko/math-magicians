import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import calculate from "logic/calculate";
import Span from "components/Span";

describe("test Calculating", () => {
  test("Subtraction", () => {
    const obj = {
      total: "20",
      next: "2",
      operation: "-",
    };
    render(<Span obj={obj} setObj={() => obj} text="=" color="white" />);
    const equal = calculate(obj, "=");
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(equal.total).toBe("18");
  });

  test("Addition", () => {
    const obj = {
      total: "2",
      next: "2",
      operation: "+",
    };
    render(<Span obj={obj} setObj={() => obj} text="=" color="white" />);
    const equal = calculate(obj, "=");
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(equal.total).toBe("4");
  });
  test("Multiplication", () => {
    const obj = {
      total: "2",
      next: "4",
      operation: "x",
    };
    render(<Span obj={obj} setObj={() => obj} text="=" color="white" />);
    const equal = calculate(obj, "=");
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(equal.total).toBe("8");
  });

  test("Division", () => {
    const obj = {
      total: "20",
      next: "4",
      operation: "÷",
    };
    render(<Span obj={obj} setObj={() => obj} text="=" color="white" />);
    const equal = calculate(obj, "=");
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(equal.total).toBe("5");
  });

  test("All clear with AC button", () => {
    const obj = {
      total: "2",
      next: "2",
      operation: "+",
    };
    render(<Span obj={obj} setObj={() => obj} text="AC" color="white" />);
    const equal = calculate(obj, "AC");
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(equal.total).toBeNull();
  });
});

describe("When there is operation, update next", () => {
  test("updates next when there is an operation", () => {
    // Input
    const obj = {
      total: "10",
      next: "9",
      operation: "+",
    };

    const buttonName = "2";
    render(<Span obj={obj} setObj={() => obj} text="2" color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {
      total: "10",
      next: "92",
      operation: "+",
    };

    const result = calculate(obj, buttonName);

    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });

  test("updates next with buttonName when next is null", () => {
    // Input
    const obj = {
      total: "5",
      next: null,
      operation: "%",
    };

    const buttonName = "9";
    render(<Span obj={obj} setObj={() => obj} text="9" color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {
      total: "5",
      next: "9",
      operation: "%",
    };

    const result = calculate(obj, buttonName);

    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });
});

describe("When no operation", () => {
  test("updates next and clears total when there is no operation and next is not null", () => {
    // Input
    const obj = {
      total: "5",
      next: "7",
      operation: null,
    };

    const buttonName = "2";
    render(<Span obj={obj} setObj={() => obj} text="2" color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {
      total: null,
      next: "72",
    };

    const result = calculate(obj, buttonName);

    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });

  test("updates next and clears total when there is no operation and next is null", () => {
    // Input
    const obj = {
      total: "5",
      next: null,
      operation: null,
    };

    const buttonName = "2";
    render(<Span obj={obj} setObj={() => obj} text="2" color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {
      total: null,
      next: "2",
    };

    const result = calculate(obj, buttonName);

    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });
});

describe("When user press .", () => {
  test("If there is next with .", () => {
    // Input
    const obj = {
      total: null,
      next: "4.",
      operation: null,
    };

    const buttonName = ".";
    render(<Span obj={obj} setObj={() => obj} text="." color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {
      ...obj,
      next: "4.",
    };

    const result = calculate(obj, buttonName);

    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });

  test("If there is next without .", () => {
    // Input
    const obj = {
      total: null,
      next: "3",
      operation: null,
    };

    const buttonName = ".";
    render(<Span obj={obj} setObj={() => obj} text="." color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {
      ...obj,
      next: "3.",
    };

    const result = calculate(obj, buttonName);

    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });

  test("If there is operation", () => {
    // input
    const obj = {
      total: "5",
      next: null,
      operation: "+",
    };

    const buttonName = ".";
    render(<Span obj={obj} setObj={() => obj} text="." color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {
      ...obj,
      next: "0.",
    };

    const result = calculate(obj, buttonName);
    expect(result).toEqual(output);
  });

  test("If there is total", () => {
    // Input
    const obj = {
      total: "7.",
      next: null,
      operation: null,
    };

    const buttonName = ".";
    render(<Span obj={obj} setObj={() => obj} text="." color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {};

    const result = calculate(obj, buttonName);
    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });

  test("If there is total", () => {
    // Input
    const obj = {
      total: "7",
      next: null,
      operation: null,
    };

    const buttonName = ".";
    render(<Span obj={obj} setObj={() => obj} text="." color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {
      ...obj,
      next: "7.",
    };

    const result = calculate(obj, buttonName);
    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });
  test("If there is .", () => {
    // Input
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = ".";
    render(<Span obj={obj} setObj={() => obj} text="." color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {
      ...obj,
      next: "0.",
    };

    const result = calculate(obj, buttonName);
    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });
});

describe("If user press +/-", () => {
  test("If there is next", () => {
    // Input
    const obj = {
      total: null,
      next: "7",
      operation: null,
    };

    const buttonName = "+/-";
    render(<Span obj={obj} setObj={() => obj} text="+/-" color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {
      ...obj,
      next: "-7",
    };

    const result = calculate(obj, buttonName);
    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });
  test("If there is total", () => {
    // Input
    const obj = {
      total: "9",
      next: null,
      operation: null,
    };

    const buttonName = "+/-";
    render(<Span obj={obj} setObj={() => obj} text="+/-" color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {
      ...obj,
      total: "-9",
    };

    const result = calculate(obj, buttonName);
    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });

  test("If it's just +/-", () => {
    // Input
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = "+/-";
    render(<Span obj={obj} setObj={() => obj} text="+/-" color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {};

    const result = calculate(obj, buttonName);
    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });
});

describe("User pressed an operation after pressing the = sign", () => {
  test("Testing", () => {
    // Input
    const obj = {
      total: "9",
      next: null,
      operation: null,
    };

    const buttonName = "-";
    render(<Span obj={obj} setObj={() => obj} text="-" color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {
      ...obj,
      operation: "-",
    };

    const result = calculate(obj, buttonName);

    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });
});

describe("User pressed an operation button and there is an existing operation", () => {
  test("If there is total but next is null", () => {
    // Input
    const obj = {
      total: "8",
      next: null,
      operation: "-",
    };

    const buttonName = "+";
    render(<Span obj={obj} setObj={() => obj} text="+" color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {
      ...obj,
      operation: "+",
    };

    const result = calculate(obj, buttonName);
    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });

  test("If there is no total", () => {
    // Input
    const obj = {
      total: null,
      next: null,
      operation: "-",
    };

    const buttonName = "+";
    render(<Span obj={obj} setObj={() => obj} text="+" color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {
      total: 0,
      operation: "+",
    };

    const result = calculate(obj, buttonName);
    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });
  test("Otherwise it should return", () => {
    // Input
    const obj = {
      total: "9",
      next: "5",
      operation: "-",
    };

    const buttonName = "+";
    render(<Span obj={obj} setObj={() => obj} text="+" color="white" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Output
    const output = {
      total: "4",
      next: null,
      operation: "+",
    };

    const result = calculate(obj, buttonName);
    // Testing if the actual result matches the expected object
    expect(result).toEqual(output);
  });
});
