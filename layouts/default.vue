<template>
  <html lang="en">
    <body className="{inter.className}">
      <NavigationBar />
      <main id="main">
        <slot />
      </main>
    </body>
  </html>
</template>

<script setup lang="ts">
import "./globals.css";
import NavigationBar from "../components/navigationBar/navigationBar";

export const metadata: Metadata = {
  title: "Kcalculator App",
  description: "Manage your nutrition",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        <main id="main">{children}</main>
      </body>
    </html>
  );
</script>
}

<style></style>
