<div data-bookid="{{ ID_buku }}" data-testid="bookItem" class="book-item">
  <h3 data-testid="bookItemTitle" class="book-title">{{ judul_buku }}</h3>
  <p data-testid="bookItemAuthor" class="book-author">Penulis: {{ penulis_buku }}</p>
  <p data-testid="bookItemYear" class="book-year">Tahun: {{ tahun_rilis_buku }}</p>
  <div class="book-actions">
    <button data-testid="bookItemIsCompleteButton" class="toggle-completion">{{ tombol_untuk_ubah_kondisi }}</button>
    <button data-testid="bookItemDeleteButton" class="delete-book">{{ tombol_untuk_hapus }}</button>
    <button data-testid="bookItemEditButton" class="edit-book">{{ tombol_untuk_edit }}</button>
  </div>
</div>