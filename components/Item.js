export default function Item({ name, preview }) {
  return (
    <div style={{ marginRight: "20px", height: "200px" }}>
      <div
        style={{
          height: "150px",
          aspectRatio: "1",
          border: "2px solid var(--complement)",
          borderRadius: "13px",
        }}
      >
        {preview}
      </div>
      <h3 style={{ fontSize: "18pt", marginTop: "10px" }}>{name}</h3>
    </div>
  );
}
