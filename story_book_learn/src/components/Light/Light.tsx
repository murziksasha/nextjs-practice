
type Props = {
  /** some description */
  variant?: 'green' | 'yellow' | 'red'
}

/** Some comment about my light component */

function Light({variant = 'green'}: Props) {
  return (
    <div style={{
      background: variant,
      borderRadius: '50%',
      width: 50,
      height: 50,
    }}>

    </div>
  )
}

export default Light