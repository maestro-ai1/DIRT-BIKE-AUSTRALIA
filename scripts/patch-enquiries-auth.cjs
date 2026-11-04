// 2026-11-04: the Enquiries list and the reply page fetched with an empty passcode (hook state not read back yet) so they always showed nothing.
// Same pattern the Orders and Dashboard pages already use: wait for isUnlocked before fetching.
const fs = require('fs');
const edit = (f, pairs) => { let t = fs.readFileSync(f, 'utf8'); const crlf = t.includes('\r\n'); t = t.replace(/\r\n/g, '\n'); for (const [a, b] of pairs) { if (!t.includes(a)) throw new Error(f + ' missing: ' + a.slice(0, 50)); t = t.replace(a, b); } fs.writeFileSync(f, crlf ? t.replace(/\n/g, '\r\n') : t); };
edit('app/admin/enquiries/page.tsx', [
  ['const { getAuthHeaders, lock } = useAdminPasscode();', 'const { getAuthHeaders, lock, isUnlocked } = useAdminPasscode();'],
  ['  useEffect(() => {\n    fetchEnquiries();\n  }, []);', '  useEffect(() => {\n    if (isUnlocked) fetchEnquiries();\n  }, [isUnlocked]); // eslint-disable-line react-hooks/exhaustive-deps'],
]);
edit('app/admin/reply-enquiry/page.tsx', [
  ['const { getAuthHeaders } = useAdminPasscode();', 'const { getAuthHeaders, isUnlocked } = useAdminPasscode();'],
  ['    if (!idParam) return;\n    const fetchEnquiry', '    if (!idParam || !isUnlocked) return;\n    const fetchEnquiry'],
  ['    fetchEnquiry();\n  }, [idParam]);', '    fetchEnquiry();\n  }, [idParam, isUnlocked]); // eslint-disable-line react-hooks/exhaustive-deps'],
]);
console.log('patched');
