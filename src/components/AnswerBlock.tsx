interface AnswerBlockProps {
  answer: string;
}

export default function AnswerBlock({ answer }: AnswerBlockProps) {
  return (
    <div style={{
      maxWidth: 900,
      margin: '0 auto',
      padding: '32px 24px 0',
    }}>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 18,
        lineHeight: 1.7,
        color: '#333',
        fontWeight: 400,
      }}>
        {answer}
      </p>
    </div>
  );
}
