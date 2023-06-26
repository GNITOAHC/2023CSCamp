<template>
  <div>
    <button @click="downloadFile" style="text-decoration: underline;">{{ display }}</button>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    display: {
      type: String,
      required: true,
    },
  },
  methods: {
    downloadFile() {
      // Create a link element with the file's URL
      const link = document.createElement("a");
      link.href = this.src;

      // Set the link's download attribute to the file's name
      link.download = this.src.split("/").pop();

      // Append the link to the document and click it to initiate the download
      document.body.appendChild(link);
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    },
  },
};
</script>
