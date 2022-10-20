<script lang="ts">
  import Invoice from "./lib/Invoice.svelte";
  import { Currency, type InvoiceItem } from "./types";

  const dummyItems: InvoiceItem[] = [
    {
      title: "Butt plug",
      description: "You know what it is",
      quantity: 999,
      price: 250,
    },
    {
      title: "Macintosh (1984)",
      description: "I LOVE VINTAGE APPLE!",
      quantity: 100,
      price: 5000,
    },
    {
      title: "Coca Cola (24-pack)",
      quantity: 5,
      price: 12,
    },
  ];
</script>

<Invoice currency={Currency.USD} items={dummyItems} />
