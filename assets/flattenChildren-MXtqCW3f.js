function o(i,e="PlacementContainerCustomization"){let n=[];for(const t of i)t.type===e&&n.push(t),t.children&&(n=n.concat(o(t.children,e)));return n}export{o as f};
