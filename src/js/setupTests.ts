import '@testing-library/jest-dom';

// Polyfill for getSelection (required for @testing-library/user-event)
if (!document.getSelection) {
  document.getSelection = () =>
    ({
      rangeCount: 0,
      addRange: () => {},
      removeAllRanges: () => {},
      getRangeAt: () => ({
        startContainer: document.body,
        endContainer: document.body,
        startOffset: 0,
        endOffset: 0,
        setStart: () => {},
        setEnd: () => {},
        commonAncestorContainer: document.body,
        collapsed: true,
        cloneContents: () => document.createDocumentFragment(),
        cloneRange: () => ({}),
        collapse: () => {},
        compareBoundaryPoints: () => 0,
        deleteContents: () => {},
        detach: () => {},
        extractContents: () => document.createDocumentFragment(),
        insertNode: () => {},
        intersectsNode: () => false,
        isPointInRange: () => false,
        selectNode: () => {},
        selectNodeContents: () => {},
        surroundContents: () => {},
        toString: () => '',
      }),
    } as any);
}

// Polyfill for createRange (required for @testing-library/user-event)
if (!document.createRange) {
  document.createRange = () =>
    ({
      startContainer: document.body,
      endContainer: document.body,
      startOffset: 0,
      endOffset: 0,
      setStart: () => {},
      setEnd: () => {},
      commonAncestorContainer: document.body,
      collapsed: true,
      cloneContents: () => document.createDocumentFragment(),
      cloneRange: () => ({}),
      collapse: () => {},
      compareBoundaryPoints: () => 0,
      deleteContents: () => {},
      detach: () => {},
      extractContents: () => document.createDocumentFragment(),
      getBoundingClientRect: () => ({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        toJSON: () => {},
      }),
      getClientRects: () => ({
        length: 0,
        item: () => null,
        // eslint-disable-next-line func-names, object-shorthand, @typescript-eslint/no-empty-function
        [Symbol.iterator]: function*() {},
      }),
      insertNode: () => {},
      intersectsNode: () => false,
      isPointInRange: () => false,
      selectNode: () => {},
      selectNodeContents: () => {},
      surroundContents: () => {},
      toString: () => '',
    } as any);
}
