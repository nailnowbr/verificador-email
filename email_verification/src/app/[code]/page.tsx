import ActivationClient from './ActivationClient';

type PageProps = {
  params: Promise<{
    code: string;
  }>;
};

export default async function ValidationPage({ params }: PageProps) {
  const { code } = await params;

  return <ActivationClient code={code} />;
}