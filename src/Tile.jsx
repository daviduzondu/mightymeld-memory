export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-flex h-12 w-12 ml-2 rounded bg-blue-300 text-center bg-indigo-300"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="inline-flex h-12 w-12 ml-2 rounded bg-green-500 text-white bg-indigo-600">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "middle",
            }}
            className="p-2"
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="inline-flex h-12 w-12 ml-2 rounded text-gray-300 text-indigo-200">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "middle",
            }}
            className="p-2"
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return <div onClick={flip} className={className}></div>;
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
