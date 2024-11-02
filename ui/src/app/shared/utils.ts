import * as pdfjsLib from "pdfjs-dist";

export async function loadAndRenderPDF(
  targetedCanvas: HTMLCanvasElement,
  pdfUrl: string,
  topPixelReduction: number,
  rightPixelReduction: number,
  bottomPixelReduction: number,
  leftPixelReduction: number,
): Promise<void> {
  pdfjsLib.GlobalWorkerOptions.workerSrc = './assets/js/pdf.worker.min.mjs';

  const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
  const page = await pdf.getPage(1);
  const viewport = page.getViewport({ scale: 1.5 });

  const context = targetedCanvas.getContext('2d')!;

  targetedCanvas.width = viewport.width;
  targetedCanvas.height = viewport.height;

  const renderContext = {
    canvasContext: context,
    viewport: viewport
  };
  const renderTask = page.render(renderContext);
  await renderTask.promise;

  context.drawImage(
    targetedCanvas,
    leftPixelReduction,
    topPixelReduction,
    viewport.width - (leftPixelReduction + rightPixelReduction),
    viewport.height - (topPixelReduction + bottomPixelReduction),
    0, 0,
    targetedCanvas.width, targetedCanvas.height
  );
}
