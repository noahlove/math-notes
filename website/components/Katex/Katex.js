import React from 'react'
import ReactMarkdown from 'react-markdown'
import RemarkMath from 'remark-math'
import RehypeKatex from 'rehype-katex'
import { BlockMath, InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css'

const _mapProps = (props) => ({
  ...props,
  skipHtml: false,
  remarkPlugins: [RemarkMath],
  rehypePlugins: [RehypeKatex],
  components: {
    math: ({children}) => <BlockMath>{children[0]}</BlockMath>,
    inlineMath: ({ children }) => <InlineMath>{children[0]}</InlineMath>,
  },
})

const Katex = (props) => <ReactMarkdown {..._mapProps(props)} />

export default Katex
