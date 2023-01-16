import ReactMarkdown from "react-markdown";


const markDown = `
  ## markdown test 입니다.  
`

export default function MarkdownRenderer() {
  return (
    <ReactMarkdown>{markDown}</ReactMarkdown>
  )
}

