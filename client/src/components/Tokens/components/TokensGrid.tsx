import '../styles/tokens-grid.css'

type TokensgridProps = {
  tokens: Record<string, string>
}

export function TokensGrid({ tokens }: TokensgridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <th>Name</th>
        <th>Value</th>
        <th>Pixels</th>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              <td>{Number(value.replace('rem', '')) * 10}px</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
