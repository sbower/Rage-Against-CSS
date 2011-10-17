(function() {
  $(function() {
    var editor;
    return editor = CodeMirror.fromTextArea($("#code").get(0), {
      theme: 'night'
    });
  });
}).call(this);
