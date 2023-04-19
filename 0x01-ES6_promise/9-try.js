export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(value);
    queue.push('Guardrail was processed');
    return queue;
  } catch (error) {
    queue.push(`${error}`);
    queue.push('Guardrail was processed');
    return queue;
  }
}
