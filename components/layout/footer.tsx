import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="border-t py-12">
      <Container>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
