<script lang="ts">
  import TiExport from "svelte-icons/ti/TiExport.svelte";
  import { jsPDF } from "jspdf";
  import type { InvoiceItem, Currency } from "src/types";

  export let businessName: string = "Untitled business";
  export let billToName: string = "Untitled payee";
  export let billToEmail: string = "email@example.com";
  export let invoiceNum: number = 1;
  export let issueDate: any = new Date().toLocaleDateString();
  export let currency: Currency;
  export let items: InvoiceItem[];

  let total = 0;
  let invoice;

  const exportAsPDF = () => {
    const pdf = new jsPDF({
      unit: "px",
    });
    pdf.html(invoice, {
      html2canvas: {
        scale: 0.5,
      },
      callback: (doc) => doc.save("test.pdf"),
    });
  };
</script>

<button
  on:click={exportAsPDF}
  class="absolute right-2 top-2 w-10 h-10 bg-gray-300 text-gray-500 p-1 rounded-md hover:text-gray-400"
>
  <TiExport />
</button>

<div class="w-full min-h-screen font-inter flex justify-center">
  <div bind:this={invoice} class="w-[75%] mt-12">
    <div class="w-full flex justify-between items-center">
      <h1 class="text-4xl font-bold">{businessName}</h1>
      <h1 class="uppercase text-3xl font-bold">Invoice</h1>
    </div>

    <div class="flex justify-between mt-36 mb-12">
      <div class="flex flex-col">
        <h1 class="font-semibold text-2xl">Bill To</h1>
        <span>{billToName}</span>
        <span>{billToEmail}</span>
      </div>
      <div class="flex flex-col text-right">
        <h1 class="font-semibold text-2xl">Invoice #00{invoiceNum}</h1>
        <span>Due Upon Receipt</span>
        <span>Issued {issueDate}</span>
      </div>
    </div>

    <table class="w-full">
      <tr
        class="[&>*]:bg-[#F4F4F4] [&>*]:border-2 [&>*]:p-2 [&>*]:border-[#E4E4E4]"
      >
        <th> Description </th>
        <th> QTY </th>
        <th> Price </th>
        <th> Total </th>
      </tr>
      {#each items as item, idx}
        <tr
          class="w-full table-fixed [&>*]:border-2 [&>*]:py-2 [&>*]:px-4 [&>*]:border-[#E4E4E4]"
        >
          <td class="w-2/3">
            <h1 class="text-xl font-semibold">{item.title}</h1>
            {#if item.description}
              <p class="text-sm text-gray-500">
                {item.description}
              </p>
            {/if}
          </td>
          <td class="text-center">{item.quantity}</td>
          <td class="text-right">{currency}{item.price}</td>
          <td class="text-right">{currency}{item.price + total}</td>
        </tr>
      {/each}
    </table>
  </div>
</div>
