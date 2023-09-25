export function Checkbox({
  id,
  value,
  checked = false,
  onChange,
}: {
  id: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}) {
  return <input className="checkbox" type="checkbox" id={id} value={value} checked={checked} onChange={onChange}/>;
}
