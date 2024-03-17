import Layout from "../components/layout"
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function Page() {
  return (
    <Layout>
      <ConnectButton />
      <h1>This page is protected by NextAuth Middleware</h1>
      <p>Only admin users can see this page.</p>
      <p>
        To learn more about the NextAuth middleware see&nbsp;
        <a href="https://next-auth.js.org/configuration/nextjs#middleware">
          the docs
        </a>
      </p>
    </Layout>
  )
}