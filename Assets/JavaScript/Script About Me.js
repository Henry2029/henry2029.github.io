function openFile() {
    var link = document.createElement('a');
    link.href = 'Assets/DOCS/curriculum2.pdf';
    
    link.target = '_blank';
    
    link.click();
}

function downloadFile() {
    var link = document.createElement('a');
    link.href = 'Assets/DOCS/curriculum2.pdf';
  
    link.download = 'curriculum2';
  
    link.click();
}